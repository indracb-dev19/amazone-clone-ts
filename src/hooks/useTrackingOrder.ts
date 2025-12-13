import axios from "axios";
import { useEffect, useState } from "react";
import type { Orders } from "../types/orders";
import { useParams } from "react-router";
import dayjs from "dayjs";

export default function useTrackingOrder() {
    const { orderId } = useParams()
    const [order, setOrder] = useState((): Orders | null => null)

    useEffect(() => {
        if (typeof orderId === 'string') {
            const getData = async () => {
                const response = await axios.get(`/api/orders/${orderId}?expand=products`)
                setOrder(response.data)
            }

            getData()
        }
    }, [orderId])

    function trackingProgress(orderTimeMs: number, estimatedDeliveryTimeMs: number | undefined) {
        if (estimatedDeliveryTimeMs === undefined) {
            return 0
        }

        const totalTimeDeliveryMs = estimatedDeliveryTimeMs - orderTimeMs
        const timePassedMs = dayjs().valueOf() - orderTimeMs

        const progress = ((timePassedMs / totalTimeDeliveryMs) * 100);

        return progress > 100 ? 100 : progress
    }

    return {
        order,
        trackingProgress
    }
}