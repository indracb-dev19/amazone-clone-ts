import type { Orders } from "../types/orders";
import { centsToDollar } from "../utils/converter";

type PaymentSummaryProps = {
  orders: Orders[];
};

export default function PaymentSummary({ orders }: PaymentSummaryProps) {
  let totalOrderItem = 0;
  let totalOrderProductPrice = 0;
  if (orders.length > 0) {
    orders.forEach((order) => {
      order.products.forEach((product) => {
        totalOrderItem += product.quantity;
        totalOrderProductPrice += (product.product.priceCents * product.quantity);
      });
    });
  }

  return (
    <div className="payment-summary">
      <div className="payment-summary-title">Payment Summary</div>

      <div className="payment-summary-row">
        <div>Items ({totalOrderItem}):</div>
        <div className="payment-summary-money">
          ${centsToDollar(totalOrderProductPrice)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money">$4.99</div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">$47.74</div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money">$4.77</div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">$52.51</div>
      </div>

      <button className="place-order-button button-primary">
        Place your order
      </button>
    </div>
  );
}
