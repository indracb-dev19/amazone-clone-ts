import axios from "axios";
import { useEffect, useState } from "react";
import type { Orders } from "../types/orders";

export default function useOrder() {
    const [orders, setOrders] = useState((): Orders[] => [])

    useEffect(() => {
        axios.get('/api/orders?expand=products').then((response) => {
            setOrders(response.data)
        })
    }, [])

    return {
        orders,
    }
}