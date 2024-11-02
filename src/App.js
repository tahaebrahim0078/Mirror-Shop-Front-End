import "./App.css";
import Navpar from "./components/Navpar/Navpar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopeCatagorey from "./pages/ShopeCatagorey";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/cart";
import LogainSinap from "./pages/logainSinap";
import Footer from "./components/Footer/Footer";
import men_banner from "./components/assets/banner_mens.png";
import wome_banner from "./components/assets/banner_women.png";
import kids_banner from "./components/assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navpar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopeCatagorey banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopeCatagorey banner={wome_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopeCatagorey banner={kids_banner} category="kid" />}
          />
          <Route path="/Product" element={<Product />}>
            <Route path=":ProductId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/logain" element={<LogainSinap />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
