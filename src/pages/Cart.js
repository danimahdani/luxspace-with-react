import React from "react";

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import Footer from "parts/Footer";
import Sitemap from "parts/Sitemap";
import ShoppingChart from "parts/Cart/ShoppingChart";
import ShippingDetails from "parts/Cart/ShippingDetails";

export default function HomePage() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />

      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingChart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
}
