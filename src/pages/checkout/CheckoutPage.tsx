import { Activity } from "react";
import type { CartItem } from "../../types/cartItem";
import "./checkout-page.css";
import CheckoutHeader from "./CheckoutHeader";
import SummaryCartItem from "../../components/SummaryCartItem";
import type { Orders } from "../../types/orders";
import PaymentSummary from "../../components/PaymentSummary";

type CheckoutPageProps = {
  carts: CartItem[];
  onUpdateDeliveryOption: (deliveryOptionId: string, productId: string) => void;
  orders: Orders[]
};

export default function CheckoutPage({
  carts,
  onUpdateDeliveryOption,
  orders
}: CheckoutPageProps) {
  return (
    <>
      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            <Activity mode={carts.length > 0 ? "visible" : "hidden"}>
              {carts.map((cart) => (
                <SummaryCartItem
                  key={cart.productId}
                  cartItem={cart}
                  onUpdateDeliveryOption={onUpdateDeliveryOption}
                />
              ))}
            </Activity>
          </div>
          <PaymentSummary orders={orders}/>
        </div>
      </div>
    </>
  );
}
