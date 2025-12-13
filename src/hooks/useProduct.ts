import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "../types/product";

export default function useProduct() {
    const [products, setProducts] = useState((): Product[] => [])

    useEffect(() => {
        // create async function if we want to use async await in useEffect
        const getProducts = async () => {
            const response = await axios.get('/api/products')
            setProducts(response.data)
        }

        getProducts()
    }, [])

    return {
        products,
    }
}