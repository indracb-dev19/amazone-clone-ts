import axios from "axios";
import { useEffect, useState } from "react";
import type { CartItem } from "../types/cartItem";

export default function useCart() {
    const [carts, setCarts] = useState((): CartItem[] => [])

    useEffect(() => {
        axios.get('/api/cart-items?expand=product').then((response) => {
            setCarts(response.data)
        })
    }, [])

    function updateDeliveryOption(productId: string, deliveryOptionId: string) {
        const cartSelected = carts.findIndex(cart => cart.productId == productId)


        if (cartSelected != -1) {
            setCarts(prev => {
                prev[cartSelected].deliveryOptionId = deliveryOptionId
                return [...prev]
            })
        }
    }

    return {
        carts,
        updateDeliveryOption
    }
}