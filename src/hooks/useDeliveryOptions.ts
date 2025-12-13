import axios from "axios";
import { useEffect, useState } from "react";
import type { DeliveryOptionItem } from "../types/deliveryOptionItem";

export default function useDeliveryOptions() {
    const [deliveryOptions, setDeliveryOptions] = useState((): DeliveryOptionItem[] => [])

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime').then((response) => {
            setDeliveryOptions(response.data)
        })
    }, [])

    function onSelectedDeliveryOption(id: string, productId: string, cb: (idCb: string, productIdCb: string) => void) {
        cb(productId, id);
    }

    function getSelectedDeliveryOption(id: string) {
        return deliveryOptions.find(item => item.id == id)
    }

    return {
        deliveryOptions,
        onSelectedDeliveryOption,
        getSelectedDeliveryOption
    }
}