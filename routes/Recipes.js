import React, {useEffect} from "react";
import Recipe from "../components/hero/Recipe";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/hero/Footer";

export default function Recipes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Navbar />
      <Recipe />
      <Footer />
    </div>
  );
}
