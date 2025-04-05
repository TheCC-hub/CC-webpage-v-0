import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { getOrdersByUser, upsertOrder } from "@/data-access/orders.service";
import { NextRequest, NextResponse } from "next/server";
import { OrderInterface } from "@/types/order.type";

export async function POST(req: NextRequest) {
    const { order } = await req.json();
    const session = await getServerSession(authOptions)
    console.log(order)
    console.log(session)


    if (!session || !session.user || !session.user.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {

        const res = await upsertOrder(order as OrderInterface, session?.user?.email)
        console.log(res)
        return NextResponse.json({ status: 200 });

    } catch (e) {
        return NextResponse.json({ error: e }, { status: 400 });
    }
}