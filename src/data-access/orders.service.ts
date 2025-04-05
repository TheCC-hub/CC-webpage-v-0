import { prisma } from "@/lib/prisma"
import { OrderInterface } from "@/types/order.type"

export const upsertOrder = async (order: OrderInterface, clientMail: string) => {
    try {
        const res = await prisma.order.upsert({
            where: {
                id: order.order_id,
            },
            create: {
                id: order.order_id,
                orderType: order.order_type,
                formStage: order.form_stage,
                clientMail

            },
            update: {
                formStage: order.form_stage,
                orderType: order.order_type,
                rawFootageSize: order.video_footage.raw_footage_size,
                rawFootageLength: order.video_footage.raw_footage_length,
                videTitle: order.logistics.video_title,
                videoCategory: order.logistics.video_category,
                publishDate: order.logistics.publish_date,
                finalLength: order.logistics.final_length,
                funny: order.video_tone.funny,
                serious: order.video_tone.serious,
                professional: order.video_tone.professional,
                elegant: order.video_tone.elegant,
                casual: order.video_tone.casual,
                entertaining: order.video_tone.entertaining,
                informational: order.video_tone.informational,
                videoPace: order.video_pace,
                rawFootageUrl: order.raw_footage_url,
                status: order.status,
            }
        })
        return res
        // console.log(res)
    } catch (e) {
        console.log(e)
        throw new Error("Failed to upsert order")
    }
}

export const upsertAddOn = async (orderId: string, addOn: { title: string, description: string, number: number }) => {
    try {
        const res = await prisma.addOns.upsert({
            where: {
                id: orderId.concat(addOn.title),
            },
            create: {
                id: orderId.concat(addOn.title),
                title: addOn.title,
                number: addOn.number,
                orderId
            },
            update: {
                number: addOn.number,
            }
        })
        return res
    } catch (e) {
        console.log(e)
        throw new Error("Failed to upsert addOn")
    }
}

export const getOrdersByUser = async (clientMail: string) => {
    const order = await prisma.order.findMany({
        where: {
            clientMail,
        },
        include: {
            addOns: true,
        }
    })

    if (!order) {
        throw new Error("Order not found")
    }

    return order;
}
export const getAllPendingOrdersOfUser = async (clientMail: string) => {
    const order = await prisma.order.findMany({
        where: {
            clientMail,
            status: "pending"
        },
        include: {
            addOns: true,
        }
    })

    if (!order) {
        throw new Error("Order not found")
    }

    return order;
}

export const getOrdersById = async (orderId: string) => {
    const order = await prisma.order.findMany({
        where: {
            id: orderId,
        },
        include: {
            addOns: true,
        }
    })

    if (!order) {
        throw new Error("Order not found")
    }

    return order;
}