import { prisma } from "@/lib/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ user }) {
            if (!user.email) return false;

            const existingUser = await prisma.user.findUnique({
                where: { email: user.email },
            });

            if (!existingUser) {
                // Create the user if they don't exist
                await prisma.user.create({
                    data: {
                        email: user.email,
                        name: user.name,
                        image: user.image,
                    },
                });
            }

            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email;
                token.name = user.name;
                token.picture = user.image;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.email = token.email;
                session.user.name = token.name;
                session.user.image = token.picture;
            }
            return session;
        },
    },
};

