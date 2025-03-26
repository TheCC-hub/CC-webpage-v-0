"use client";
import { useState, useEffect, useRef } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, getDocs } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { IoIosSend } from "react-icons/io";

export default function Chat() {
    const { data: session } = useSession();
    const [messages, setMessages] = useState<any[]>([]);
    const [input, setInput] = useState("");

    const messagesContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!session?.user?.email) return;
        const q = query(
            collection(db, `chats/${session.user.email}/messages`),
            orderBy("createdAt")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
        console.log(messages)

        return () => unsubscribe();
    }, [session]);

    const sendMessage = async () => {
        if (!session?.user?.email) {
            console.error("User not authenticated");
            return;
        }
        if (input.trim() === "") return

        try {
            await addDoc(collection(db, `chats/${session.user.email}/messages`), {
                text: input.trim(),
                sender: session.user.email, // User's email
                createdAt: serverTimestamp(),
            });
            setInput("")

        } catch (error) {
            console.error("Error sending message:", error);
        } finally {
            setInput("")
        }

    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            sendMessage();
            setInput("")

        }
    };
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);
    if (!session) return <p>Please log in to chat.</p>;

    return (
        <div className=" h-full w-full flex items-center justify-between flex-col relative px-2 py-2">
            <h2 className="absolute top-0 text-lg font-bold py-2 bg-primary text-white w-full text-center z-40">Chat with Us</h2>

            <div className="flex flex-col items-center justify-end h-full w-full relative">
                <div className="overflow-y-scroll p-2 w-full mt-10 h-auto flex flex-col no-scrollbar" ref={messagesContainerRef}>
                    {messages.map((msg) => (
                        <div key={msg.id} className={`my-1 flex items-center ${msg.sender === "admin" ? "justify-start" : "justify-end"}`}>
                            <span className={`p-2 inline-block ${msg.sender === "admin" ? "bg-red-200 dark:bg-primary rounded-r-2xl rounded-bl-2xl" : "bg-blue-200 dark:bg-blue-500 rounded-l-2xl rounded-tr-2xl"} `}>
                                {msg.text}
                            </span>
                        </div>
                    ))}
                </div>

                <div className=" w-full h-auto flex items-center justify-center pt-3 pb-1 border-t-[0.1px] border-primary ">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="outline-none p-1 w-full bg-transparent"
                        placeholder="Welcome to CC. How can we help you?"
                        onKeyDown={handleKeyPress}
                    />
                    <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded text-lg items-center justify-center flex">
                        <IoIosSend />
                    </button>
                </div>

            </div>

        </div>
    );
}