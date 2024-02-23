import React from "react";
import Recipe from "../components/hero/Recipe";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/hero/Footer";

export default function Recipes() {
  return (
    <div>
      <Navbar />
      <Recipe />
      <Footer />
    </div>
  );
}
