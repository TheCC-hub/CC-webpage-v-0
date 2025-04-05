import { getOrdersById, getOrdersByUser } from "@/data-access/orders.service";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";



export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions)
    if (!session || !session.user || !session.user.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const res = await getOrdersById(req.nextUrl.searchParams.get("orderId") as string)
        console.log(res)
        return NextResponse.json({ status: 200, data: res });

    } catch (e) {
        return NextResponse.json({ error: e }, { status: 400 });
    }
}