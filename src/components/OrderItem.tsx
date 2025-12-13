import { Activity } from "react";
import type { Orders } from "../types/orders";
import { centsToDollar, msToDate } from "../utils/converter";
import OrderDetail from "./OrderDetail";

type OrderItemProps = {
  orderItem: Orders;
};

export default function OrderItem({ orderItem }: OrderItemProps) {
  return (
    <div className="order-container">
      <div className="order-header">
        <div className="order-header-left-section">
          <div className="order-date">
            <div className="order-header-label">Order Placed:</div>
            <div>{msToDate(orderItem.orderTimeMs)}</div>
          </div>
          <div className="order-total">
            <div className="order-header-label">Total:</div>
            <div>${centsToDollar(orderItem.totalCostCents)}</div>
          </div>
        </div>

        <div className="order-header-right-section">
          <div className="order-header-label">Order ID:</div>
          <div>{orderItem.id}</div>
        </div>
      </div>

      <div className="order-details-grid">
        <Activity mode={orderItem.products.length > 0 ? 'visible' : 'hidden'} >
            {orderItem.products.map(product => <OrderDetail item={product} />)}
        </Activity>
      </div>
    </div>
  );
}
