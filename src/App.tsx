import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import useCart from "./hooks/useCart";
import useOrder from "./hooks/useOrder";

function App() {
  const {
    carts,
    paymentSummary,
    updateDeliveryOption,
    addProductToCart,
    deleteProductFromCart,
    updateQuantity,
    fetchData,
  } = useCart();
  const { orders, submitOrder } = useOrder();
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route
          index
          element={
            <HomePage carts={carts} onAddProductToCart={addProductToCart} />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              carts={carts}
              onUpdateDeliveryOption={updateDeliveryOption}
              paymentSummary={paymentSummary}
              onDeleteProduct={deleteProductFromCart}
              onUpdateQuantity={updateQuantity}
              onSubmitOrder={submitOrder}
              fetchCartData={fetchData}
            />
          }
        />
        <Route
          path="/orders"
          element={
            <OrdersPage
              carts={carts}
              orders={orders}
              onAddProductToCart={addProductToCart}
            />
          }
        />
        <Route
          path="/tracking/:orderId/:productId"
          element={<TrackingPage carts={carts} />}
        />
      </Routes>
    </>
  );
}

export default App;
