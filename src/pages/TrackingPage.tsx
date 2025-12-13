import { useParams } from "react-router";
import Header from "../components/Header";
import type { CartItem } from "../types/cartItem";
import "./tracking-page.css";
import { Activity } from "react";
import OrderTracking from "../components/OrderTracking";

type TrackingPageProps = {
  carts: CartItem[];
};
export default function TrackingPage({ carts }: TrackingPageProps) {
  const { productId } = useParams();

  return (
    <>
      <Header carts={carts} />
      <div className="tracking-page">
        <div className="order-tracking">
          <Activity mode={productId === undefined ? "hidden" : "visible"}>
            <OrderTracking productId={productId as string} />
          </Activity>
        </div>
      </div>
    </>
  );
}
