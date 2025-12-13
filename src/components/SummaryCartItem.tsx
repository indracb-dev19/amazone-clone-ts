import { Activity } from "react";
import useDeliveryOptions from "../hooks/useDeliveryOptions";
import type { CartItem } from "../types/cartItem";
import { centsToDollar, msToDate } from "../utils/converter";
import DeliveryOption from "./DeliveryOption";

type SummaryCartItemProps = {
  cartItem: CartItem;
  onUpdateDeliveryOption: (deliveryOptionId: string, productId: string) => void
};

export default function SummaryCartItem({ cartItem, onUpdateDeliveryOption }: SummaryCartItemProps) {
  const { deliveryOptions, onSelectedDeliveryOption, getSelectedDeliveryOption } =
    useDeliveryOptions();
  return (
    <div className="cart-item-container">
      <div className="delivery-date">
        Delivery date:{" "}
        {msToDate(getSelectedDeliveryOption(cartItem.deliveryOptionId)?.estimatedDeliveryTimeMs)}
      </div>

      <div className="cart-item-details-grid">
        <img className="product-image" src={cartItem.product.image} />

        <div className="cart-item-details">
          <div className="product-name">{cartItem.product.name}</div>
          <div className="product-price">
            ${centsToDollar(cartItem.product.priceCents)}
          </div>
          <div className="product-quantity">
            <span>
              Quantity:{" "}
              <span className="quantity-label">{cartItem.quantity}</span>
            </span>
            <span className="update-quantity-link link-primary">Update</span>
            <span className="delete-quantity-link link-primary">Delete</span>
          </div>
        </div>

        <div className="delivery-options">
          <div className="delivery-options-title">
            Choose a delivery option:
          </div>
          <Activity mode={deliveryOptions.length > 0 ? "visible" : "hidden"}>
            {deliveryOptions.map((deliveryOption) => (
              <DeliveryOption
                item={deliveryOption}
                cartItem={cartItem}
                onSelected={onSelectedDeliveryOption}
                onUpdateDeliveryOption={onUpdateDeliveryOption}
                key={deliveryOption.id}
              />
            ))}
          </Activity>
        </div>
      </div>
    </div>
  );
}
