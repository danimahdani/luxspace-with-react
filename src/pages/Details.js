import React from "react";

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import ProductDetails from "parts/Details/ProductDetails";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import Suggestions from "parts/Details/Suggestions";

export default function HomePage() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/1231", name: "Office Room" },
          { url: "/categories/1231/products/2344", name: "Details" },
        ]}
      />

      <ProductDetails />
      <Suggestions />
      <Sitemap />
      <Footer />
    </>
  );
}
