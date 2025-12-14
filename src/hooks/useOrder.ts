/* eslint-disable react-hooks/set-state-in-effect */
import axios from "axios";
import { useEffect, useState } from "react";
import type { Orders } from "../types/orders";
import type { CartItem } from "../types/cartItem";

export default function useOrder() {
    const [orders, setOrders] = useState((): Orders[] => [])

    const fetchOrdersData = async () => {
        const response = await axios.get('/api/orders?expand=products')
        setOrders(response.data)
    }

    useEffect(() => {
        fetchOrdersData()
    }, [])

    async function submitOrder(carts: CartItem[]) {
        const response = await axios.post('/api/orders', JSON.stringify(carts))

        if (response.status === 200 || response.status === 201) {
            fetchOrdersData()
            return true
        }

        return false
    }

    return {
        orders,
        submitOrder
    }
}