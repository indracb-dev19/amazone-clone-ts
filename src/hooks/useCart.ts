import axios from "axios";
import { useEffect, useState } from "react";
import type { CartItem } from "../types/cartItem";

export default function useCart() {
    const [carts, setCarts] = useState((): CartItem[] => [])
    
    
    const fetchDataCarts = async () => {
        const response = await axios.get('/api/cart-items?expand=product')
        setCarts(response.data)
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchDataCarts()
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

    async function addProductToCart(productId: string, quantity: number) {
        const response = await axios.post('/api/cart-items', {
            productId,
            quantity
        })

        if (response.data.productId == productId) {
            fetchDataCarts()
            return true
        }

        return false
    }

    return {
        carts,
        updateDeliveryOption,
        addProductToCart
    }
}