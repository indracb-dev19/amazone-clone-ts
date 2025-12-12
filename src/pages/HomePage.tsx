import { Activity } from "react";
import Header from "../components/Header";
import Products from "../components/Product";
import { products } from "../data/products";
import "./homepage.css";

export default function HomePage() {
  return (
    <>
      <Header />
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
