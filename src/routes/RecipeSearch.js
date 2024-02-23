import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/hero/Footer";
import RecipeInfo from "../components/hero/RecipeInfo";

export default function Recipes() {
  return (
    <div>
      <Navbar />
      <RecipeInfo />
      <Footer />
    </div>
  );
}
