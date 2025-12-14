import { Link } from "react-router";
import type { CartItem } from "../types/cartItem";
import { msToDate } from "../utils/converter";

type OrderDetailProps = {
  item: Omit<CartItem, "updatedAt" | "createdAt">;
  orderId: string;
  onAddProductToCart: (productId: string, quantity: number) => void;
};

export default function OrderDetail({
  item,
  orderId,
  onAddProductToCart,
}: OrderDetailProps) {
  return (
    <>
      <div className="product-image-container">
        <img src={item.product.image} />
      </div>

      <div className="product-details">
        <div className="product-name">{item.product.name}</div>
        <div className="product-delivery-date">
          Arriving on: {msToDate(item.estimatedDeliveryTimeMs)}
        </div>
        <div className="product-quantity">Quantity: {item.quantity}</div>
        <button
          className="buy-again-button button-primary"
          onClick={() => onAddProductToCart(item.productId, 1)}
        >
          <img className="buy-again-icon" src="images/icons/buy-again.png" />
          <span className="buy-again-message">Add to Cart</span>
        </button>
      </div>

      <div className="product-actions">
        <Link to={`/tracking/${orderId}/${item.productId}`}>
          <button className="track-package-button button-secondary">
            Track package
          </button>
        </Link>
      </div>
    </>
  );
}
