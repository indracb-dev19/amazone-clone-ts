import { Link } from "react-router";
import "./checkout-header.css"
import type { CartItem } from "../../types/cartItem";

type CheckoutHeader = {
  carts: CartItem[]
}

export default function CheckoutHeader({carts}: CheckoutHeader) {
  let totalQuantity = 0

  if (carts.length > 0) {
    carts.forEach(cart => totalQuantity += cart.quantity)
  }

  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src="images/logo.png" />
            <img className="mobile-logo" src="images/mobile-logo.png" />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <Link className="return-to-home-link" to="/">
            {totalQuantity} items
          </Link>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>
  );
}
