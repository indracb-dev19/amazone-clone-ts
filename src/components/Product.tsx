import { useState } from "react";
import type { Product } from "../types/product";
import { centsToDollar, ratingStarToString } from "../utils/converter";

type ProductsProps = {
  product: Product;
  onAddProductToCart: (productId: string, quantity: number) => Promise<boolean>;
};

export default function Products({
  product,
  onAddProductToCart,
}: ProductsProps) {
  const [quantity, setQuantity] = useState(1);
  const [isSuccessAdd, setIsSuccessAdd] = useState(false);

  const onClickAddCart = async () => {
    const addResponse = await onAddProductToCart(product.id, quantity);
    setQuantity(1);
    setIsSuccessAdd(addResponse);
    setTimeout(() => {
      setIsSuccessAdd(false);
    }, 2000);
  };
  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={product.image} />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`images/ratings/rating-${ratingStarToString(
            product.rating.stars
          )}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">{`$${centsToDollar(
        product.priceCents
      )}`}</div>

      <div className="product-quantity-container">
        <select
          name={`product-quantity-${product.id}`}
          onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
          value={quantity}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div
        className={`added-to-cart success-add-${product.id} ${
          isSuccessAdd ? "success-added-to-cart" : ""
        }`}
      >
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button data-testid="btn-add-product-to-cart-test" onClick={onClickAddCart} className="add-to-cart-button button-primary">
        Add to Cart
      </button>
    </div>
  );
}
