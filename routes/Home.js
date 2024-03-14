import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/hero/Footer";

import Ai from "../components/hero/AiSearch";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero/>
      <Ai />
      <Footer />
    </div>
  );
}

export default Home;
