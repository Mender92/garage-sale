import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import GarageSale from "./pages/GarageSale";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

console.log("Product:", Product);
console.log("Type of Product:", typeof Product);

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/garage-sale" element={<GarageSale />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;