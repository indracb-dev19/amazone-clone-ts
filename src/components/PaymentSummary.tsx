import { Activity, useState } from "react";
import type { CartItem } from "../types/cartItem";
import type { PaymentSummary as PaymentSummaryType } from "../types/paymentSummary";
import { centsToDollar } from "../utils/converter";
import { LoaderCircleIcon } from "./LoaderCircleIcon";
import { useNavigate } from "react-router";

type PaymentSummaryProps = {
  paymentSummary: PaymentSummaryType | undefined;
  carts: CartItem[];
  onSubmitOrder: (carts: CartItem[]) => Promise<boolean>;
  fetchCartData: () => void;
};

export default function PaymentSummary({
  paymentSummary,
  carts,
  onSubmitOrder,
  fetchCartData,
}: PaymentSummaryProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit() {
    if (carts.length > 0) {
      setIsLoading(true);
      const submitStatus = await onSubmitOrder(carts);

      setTimeout(() => {
        if (submitStatus) {
          alert("Submit Order Successfully");
        } else {
          alert("Submit Order Failed");
        }

        setIsLoading(false);
        fetchCartData();
        navigate("/orders");
      }, 3000);
    }
  }
  return (
    <div className="payment-summary">
      <div className="payment-summary-title">Payment Summary</div>

      <div className="payment-summary-row">
        <div>Items ({paymentSummary?.totalItems || 0}):</div>
        <div className="payment-summary-money">
          ${centsToDollar(paymentSummary?.productCostCents || 0)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money">
          ${centsToDollar(paymentSummary?.shippingCostCents || 0)}
        </div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">
          ${centsToDollar(paymentSummary?.totalCostBeforeTaxCents || 0)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money">
          ${centsToDollar(paymentSummary?.taxCents || 0)}
        </div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">
          ${centsToDollar(paymentSummary?.totalCostCents || 0)}
        </div>
      </div>

      <button
        className="place-order-button button-primary"
        onClick={() => onSubmit()}
        disabled={carts.length < 1}
      >
        <Activity mode={isLoading ? "visible" : "hidden"}>
          <LoaderCircleIcon animate={true} /> <span>Loading ...</span>
        </Activity>
        {!isLoading && "Place your order"}
      </button>
    </div>
  );
}
