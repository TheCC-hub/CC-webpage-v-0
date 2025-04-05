import { getAllPendingOrdersOfUser } from "@/data-access/orders.service";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";

// get all abandent orders of a user 
export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions)
    if (!session || !session.user || !session.user.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const res = await getAllPendingOrdersOfUser(session?.user?.email)
        console.log(res)
        return NextResponse.json({ status: 200, data: res });

    } catch (e) {
        return NextResponse.json({ error: e }, { status: 400 });
    }
}