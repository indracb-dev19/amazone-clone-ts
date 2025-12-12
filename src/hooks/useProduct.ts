import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "../types/product";

export default function useProduct() {
    const [products, setProducts] = useState((): Product[] => [])

    useEffect(() => {
        axios.get('http://localhost:3000/api/products').then((response) => {
            setProducts(response.data)
        })
    }, [])

    return {
        products,
    }
}