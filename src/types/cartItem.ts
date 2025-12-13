import type { Product } from "./product"

export type CartItem = {
    id: number
    productId: string,
    quantity: number,
    deliveryOptionId: string,
    estimatedDeliveryTimeMs?: number, 
    createdAt: string,
    updatedAt: string,
    product: Product
}