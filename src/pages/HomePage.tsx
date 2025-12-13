import { Activity } from "react";
import Header from "../components/Header";
import Products from "../components/Product";
import "./homepage.css";
import useProduct from "../hooks/useProduct";
import type { CartItem } from "../types/cartItem";

type HomePageProps = {
  carts: CartItem[];
};

export default function HomePage({ carts }: HomePageProps) {
  const { products } = useProduct();

  return (
    <>
      <Header carts={carts} />
      <div className="home-page">
        <div className="products-grid">
          <Activity mode={products.length > 0 ? "visible" : "hidden"}>
            {products.map((product) => (
              <Products key={product.id} product={product} />
            ))}
          </Activity>
        </div>
      </div>
    </>
  );
}
