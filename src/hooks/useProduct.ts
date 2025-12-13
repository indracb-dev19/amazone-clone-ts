import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "../types/product";

export default function useProduct() {
    const [products, setProducts] = useState((): Product[] => [])

    useEffect(() => {
        axios.get('/api/products').then((response) => {
            setProducts(response.data)
        })
    }, [])

    return {
        products,
    }
}