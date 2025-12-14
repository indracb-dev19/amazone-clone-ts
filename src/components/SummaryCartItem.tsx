import { Activity, useState } from "react";
import useDeliveryOptions from "../hooks/useDeliveryOptions";
import type { CartItem } from "../types/cartItem";
import { centsToDollar, msToDate } from "../utils/converter";
import DeliveryOption from "./DeliveryOption";

type SummaryCartItemProps = {
  cartItem: CartItem;
  onUpdateDeliveryOption: (deliveryOptionId: string, productId: string) => void;
  onDeleteProduct: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
};

export default function SummaryCartItem({
  cartItem,
  onUpdateDeliveryOption,
  onDeleteProduct,
  onUpdateQuantity,
}: SummaryCartItemProps) {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const [isEditQty, setIsEditQty] = useState(false);
  const {
    deliveryOptions,
    onSelectedDeliveryOption,
    getSelectedDeliveryOption,
  } = useDeliveryOptions();

  function onSaveUpdateQuantity(e: React.FormEvent<HTMLSpanElement>) {
    console.log(quantity);
    e.preventDefault();

    if (Number.isNaN(quantity)) {
      setIsEditQty(false);
      return;
    }
    onUpdateQuantity(cartItem.productId, quantity);
    setIsEditQty(false);
  }
  return (
    <div className="cart-item-container">
      <div className="delivery-date">
        Delivery date:{" "}
        {msToDate(
          getSelectedDeliveryOption(cartItem.deliveryOptionId)
            ?.estimatedDeliveryTimeMs
        )}
      </div>

      <div className="cart-item-details-grid">
        <img className="product-image" src={cartItem.product.image} />

        <div className="cart-item-details">
          <div className="product-name">{cartItem.product.name}</div>
          <div className="product-price">
            ${centsToDollar(cartItem.product.priceCents)}
          </div>
          <div className="product-quantity">
            <Activity mode={isEditQty ? "visible" : "hidden"}>
              <input
                type="number"
                name="update-quantity-input"
                value={quantity}
                onChange={(e) =>
                  Number.isNaN(Number.parseInt(e.target.value)) || Number.parseInt(e.target.value) <= 0
                    ? setQuantity(1)
                    : setQuantity(Number.parseInt(e.target.value))
                }
              />
              <span
                className="save-update-quantity-link link-primary"
                onClick={onSaveUpdateQuantity}
              >
                Save
              </span>
            </Activity>
            <Activity mode={isEditQty ? "hidden" : "visible"}>
              <span>
                Quantity: <span className="quantity-label">{quantity}</span>
              </span>
              <span
                className="update-quantity-link link-primary"
                onClick={() => setIsEditQty(true)}
              >
                Update
              </span>
            </Activity>
            <span
              className="delete-quantity-link link-primary"
              onClick={() => onDeleteProduct(cartItem.productId)}
            >
              Delete
            </span>
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
