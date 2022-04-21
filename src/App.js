import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Home />} />
      {/* path="*" renvoie à Home si la page cherchée n'est pas trouvée */}

    </Routes>
  </BrowserRouter>  );
};

export default App;