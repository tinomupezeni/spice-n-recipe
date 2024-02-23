import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import Recipes from "./routes/Recipes";
import store from "./routes/Redux";
import { Provider } from "react-redux";
import RecipeSearch from "./routes/RecipeSearch";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/spice-delight" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/search-recipe" element={<RecipeSearch />} />
      </Routes>
    </Provider>
  );
}

export default App;
