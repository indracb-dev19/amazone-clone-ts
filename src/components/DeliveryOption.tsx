import type { CartItem } from "../types/cartItem";
import type { DeliveryOptionItem } from "../types/deliveryOptionItem";
import { centsToDollar, msToDate } from "../utils/converter";

type DeliveryOptionProps = {
  item: DeliveryOptionItem;
  cartItem: CartItem;
  onSelected: (id: string, productId: string, cb: (deliveryOptionId: string, productId: string) => void) => void;
  onUpdateDeliveryOption: (deliveryOptionId: string, productId: string) => void;
};
export default function DeliveryOption({
  item,
  cartItem,
  onSelected,
  onUpdateDeliveryOption,
}: DeliveryOptionProps) {
  return (
    <div className="delivery-option">
      <input
        type="radio"
        checked={item.id == cartItem.deliveryOptionId}
        className="delivery-option-input"
        name={`delivery-option-${cartItem.productId}`}
        onChange={() =>
          onSelected(item.id, cartItem.productId, onUpdateDeliveryOption)
        }
      />
      <div>
        <div className="delivery-option-date">
          {msToDate(item.estimatedDeliveryTimeMs)}
        </div>
        <div className="delivery-option-price">
          {item.priceCents == 0
            ? "FREE Shipping"
            : `$${centsToDollar(item.priceCents)}`}
        </div>
      </div>
    </div>
  );
}
