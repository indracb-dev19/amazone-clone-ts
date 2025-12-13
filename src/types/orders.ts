import type { CartItem } from "./cartItem"

export type Orders = {
    id: string,
    orderTimeMs: number,
    totalCostCents: number,
    updatedAt: string,
    products: Omit<CartItem, "updatedAt" | "createdAt">[]
}