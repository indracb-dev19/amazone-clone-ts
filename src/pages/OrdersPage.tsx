import { Activity } from "react";
import Header from "../components/Header";
import type { CartItem } from "../types/cartItem";
import type { Orders } from "../types/orders";
import "./orders-page.css";
import OrderItem from "../components/OrderItem";

type OrdersPageProps = {
  carts: CartItem[];
  orders: Orders[];
};
export default function OrdersPage({ carts, orders }: OrdersPageProps) {
  return (
    <>
      <Header carts={carts} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          <Activity mode={orders.length > 0 ? "visible" : "hidden"}>
            {orders.map((order) => (
              <OrderItem orderItem={order} />
            ))}
          </Activity>
        </div>
      </div>
    </>
  );
}
