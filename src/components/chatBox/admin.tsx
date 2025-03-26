"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";

export default function AdminChat() {
    const { data: session } = useSession();
    const [users, setUsers] = useState<string[]>([]);
    const [selectedUser, setSelectedUser] = useState<string | null>(null);
    const [messages, setMessages] = useState<{ id: string; text: string; sender: string }[]>([]);
    const [reply, setReply] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            const querySnapshot = await getDocs(collection(db, "chats"));
            setUsers(querySnapshot.docs.map((doc) => doc.id));
        }
        fetchUsers();
    }, []);

    useEffect(() => {
        if (!selectedUser) return;

        const q = query(collection(db, `chats/${selectedUser}/messages`), orderBy("createdAt"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as any)));
        });

        return () => unsubscribe();
    }, [selectedUser]);

    const sendReply = async () => {
        if (!reply.trim() || !selectedUser) return;
        await addDoc(collection(db, `chats/${selectedUser}/messages`), {
            text: reply,
            createdAt: serverTimestamp(),
            sender: "admin",  // Admin reply
        });
        setReply("");
    };

    if (!session) return <p>Please log in.</p>;
    if (!session.user || session.user.email !== "admin@clipcurve.com") return <p>Access Denied.</p>;

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Admin Chat Panel</h2>
            <div className="flex">
                <div className="w-1/3 border-r p-2">
                    <h3 className="font-bold">Users</h3>
                    {users.map((user) => (
                        <button key={user} onClick={() => setSelectedUser(user)} className="block p-2 border-b w-full">
                            {user}
                        </button>
                    ))}
                </div>
                <div className="w-2/3 p-2">
                    <h3 className="font-bold">Chat with {selectedUser}</h3>
                    <div className="h-40 overflow-auto border p-2 mb-2">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`p-2 my-1 rounded ${msg.sender === "admin" ? "bg-gray-200" : "bg-blue-200 text-right"}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                        className="border p-1 w-full"
                    />
                    <button onClick={sendReply} className="bg-blue-500 text-white p-1 mt-2 w-full">
                        Send Reply
                    </button>
                </div>
            </div>
        </div>
    );
}