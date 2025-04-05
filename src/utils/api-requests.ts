import { OrderInterface } from "@/types/order.type";

export const createOrder = async (order: OrderInterface) => {
    try {
        const res = await fetch("/api/order_form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ order }),
        })
        console.log(res)
        return res;
    }
    catch (e: any) {
        console.log("Error creating order")
        console.log(e)
    }
    return null;
}