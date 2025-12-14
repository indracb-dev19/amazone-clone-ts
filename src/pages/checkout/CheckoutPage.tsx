import { Activity } from "react";
import type { CartItem } from "../../types/cartItem";
import "./checkout-page.css";
import CheckoutHeader from "./CheckoutHeader";
import SummaryCartItem from "../../components/SummaryCartItem";
import PaymentSummary from "../../components/PaymentSummary";
import type { PaymentSummary as PaymentSummaryType } from "../../types/paymentSummary";

type CheckoutPageProps = {
  carts: CartItem[];
  paymentSummary: PaymentSummaryType | undefined;
  onUpdateDeliveryOption: (deliveryOptionId: string, productId: string) => void;
  onDeleteProduct: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onSubmitOrder: (carts: CartItem[]) => Promise<boolean>;
  fetchCartData: () => void;
};

export default function CheckoutPage({
  carts,
  paymentSummary,
  onUpdateDeliveryOption,
  onDeleteProduct,
  onUpdateQuantity,
  onSubmitOrder,
  fetchCartData,
}: CheckoutPageProps) {
  return (
    <>
      <CheckoutHeader carts={carts} />
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
                  onDeleteProduct={onDeleteProduct}
                  onUpdateQuantity={onUpdateQuantity}
                />
              ))}
            </Activity>
          </div>
          <PaymentSummary
            paymentSummary={paymentSummary}
            onSubmitOrder={onSubmitOrder}
            fetchCartData={fetchCartData}
            carts={carts}
          />
        </div>
      </div>
    </>
  );
}
