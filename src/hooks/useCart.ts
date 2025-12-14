import axios from "axios";
import { useEffect, useState } from "react";
import type { CartItem } from "../types/cartItem";
import type { PaymentSummary } from "../types/paymentSummary";

export default function useCart() {
    const [carts, setCarts] = useState((): CartItem[] => [])
    const [paymentSummary, setPaymentSummary] = useState((): PaymentSummary | undefined => undefined)

    const fetchData = async () => {
        const response = await axios.get('/api/cart-items?expand=product')
        setCarts(response.data)

        const responsePaymentSummary = await axios.get('/api/payment-summary')
        setPaymentSummary(responsePaymentSummary.data)
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchData()
    }, [])


    async function updateDeliveryOption(productId: string, deliveryOptionId: string) {
        const response = await axios.put(`/api/cart-items/${productId}`, {
            deliveryOptionId
        })

        if (response.data.productId == productId) {
            fetchData()
            return true
        }

        return false
    }

    async function addProductToCart(productId: string, quantity: number) {
        const response = await axios.post('/api/cart-items', {
            productId,
            quantity
        })

        if (response.data.productId == productId) {
            fetchData()
            return true
        }

        return false
    }

    async function deleteProductFromCart(productId: string) {
        const response = await axios.delete(`/api/cart-items/${productId}`)

        if (response.status == 200) {
            fetchData()
            return true
        }

        return false
    }

    async function updateQuantity(productId: string, quantity: number) {
        const response = await axios.put(`/api/cart-items/${productId}`, {
            quantity
        })

        if (response.data.productId == productId) {
            fetchData()
            return true
        }

        return false
    }

    return {
        carts,
        paymentSummary,
        updateDeliveryOption,
        addProductToCart,
        deleteProductFromCart,
        updateQuantity,
        fetchData
    }
}