import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import useCart from "./hooks/useCart";
import useOrder from "./hooks/useOrder";

function App() {
  const { carts, updateDeliveryOption } = useCart();
  const { orders } = useOrder();
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route index element={<HomePage carts={carts} />} />
        <Route path="/checkout" element={<CheckoutPage carts={carts} onUpdateDeliveryOption={updateDeliveryOption} orders={orders} />} />
        <Route path="/orders" element={<OrdersPage carts={carts} orders={orders} />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App;
