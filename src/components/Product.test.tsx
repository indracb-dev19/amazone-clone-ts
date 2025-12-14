/// <reference types="@testing-library/jest-dom" />

import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Products from "./Product";

describe("Product Component", () => {
  const initProduct = {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
    keywords: ["socks", "sports", "apparel"],
  };

  it("displays the product detail correctly", async () => {
    // make fake function
    const fn = vi.fn();
    render(<Products product={initProduct} onAddProductToCart={fn} />);

    // check fake web page
    // check if the component with some text is exist. Eor ex : search component product by product name
    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
    ).toBeInTheDocument();
  });
});
