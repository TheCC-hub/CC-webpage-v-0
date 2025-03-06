import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GoogleProvider from "next-auth/providers/google";
const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma), // 👈 Connect NextAuth to Prisma
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET, // Required for JWT encryption
    callbacks: {
        async session({ session, user }: { session: any, user: any }) {
            session.user.id = user.id; // Attach user ID to session
            return session;
        },
    },
};

