import { NextRequest, NextResponse } from "next/server";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { addDaysToDateTime } from "@/utils/helper-functions";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log(session, data)

    try {
        const prisma = new PrismaClient();
        const user = await prisma.user.findUnique({
            where: {
                email: session.user.email,
            },
        });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        const activePlan = await prisma.activePlan.create({
            data: {
                userId: user.id,
                orderId: data.orderId,
                planName: data.planName,
                isActive: new Date(data.startsAt) <= new Date() ? true : false,
                startsAt: new Date(data.startsAt),
                expiresAt: addDaysToDateTime(data.startsAt)
            },
        });

        return NextResponse.json({ activePlan }, { status: 200 });
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { error: "Error creating order" },
            { status: 500 }
        )
    }
}