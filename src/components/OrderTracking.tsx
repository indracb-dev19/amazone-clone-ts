import { Link } from "react-router";
import useTrackingOrder from "../hooks/useTrackingOrder";
import type { CartItem } from "../types/cartItem";
import { msToDate } from "../utils/converter";

type OrderTrackingProps = {
  productId: string;
};
export default function OrderTracking({
  productId,
}: OrderTrackingProps) {
  const { order, trackingProgress } = useTrackingOrder();

  let orderProduct: Omit<CartItem, "createdAt" | "updatedAt"> | undefined;

  let progress = 0
  if (order !== null) {
    orderProduct = order.products.find(
      (product) => product.productId == productId
    );

    progress = trackingProgress(order.orderTimeMs, orderProduct?.estimatedDeliveryTimeMs)
  }
  return (
    <div className="order-tracking">
      <Link className="back-to-orders-link link-primary" to="/orders">
        View all orders
      </Link>

      <div className="delivery-date">
        Arriving on {msToDate(orderProduct?.estimatedDeliveryTimeMs)}
      </div>

      <div className="product-info">{orderProduct?.product.name}</div>

      <div className="product-info">
        Quantity: {orderProduct?.quantity || 0}
      </div>

      <img
        className="product-image"
        src={orderProduct?.product.image}
      />

      <div className="progress-labels-container">
        <div className={`progress-label ${progress < 33 ? 'current-status' : ''}`}>Preparing</div>
        <div className={`progress-label ${progress > 50 && progress < 100 ? 'current-status' : ''}`}>Shipped</div>
        <div className={`progress-label ${progress == 100 ? 'current-status' : ''}`}>Delivered</div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{width: `${progress}%`}}></div>
      </div>
    </div>
  );
}
