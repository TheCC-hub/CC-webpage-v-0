
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";
import { upsertAddOn } from "@/data-access/orders.service";


export async function POST(req: NextRequest) {
    const { order } = await req.json();
    const session = await getServerSession(authOptions)
    console.log(order)
    console.log(session)


    if (!session || !session.user || !session.user.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {

        order.add_ons.forEach(async (addOn: { title: string; description: string; number: number; }) => {
            await upsertAddOn(order.order_id, addOn)
        })
        console.log("Add ons upserted")

        return NextResponse.json({ status: 200 });

    } catch (e) {
        return NextResponse.json({ error: e }, { status: 400 });
    }
}