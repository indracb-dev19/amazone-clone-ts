import axios from "axios";
import { useEffect, useState } from "react";
import type { CartItem } from "../types/cartItem";

export default function useCart() {
    const [carts, setCarts] = useState((): CartItem[] => [])

    useEffect(() => {
        axios.get('http://localhost:3000/api/cart-items').then((response) => {
            setCarts(response.data)
        })
    }, [])

    function getCartTotalItem() {
        if (carts.length > 0) {            
            let total = 0

            carts.forEach((cartItem) => total += cartItem.quantity)

            return total;
        }

        return 0;
    }

    return {
        carts,
        getCartTotalItem
    }
}