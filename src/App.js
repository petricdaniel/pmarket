import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Layout from "./components/Layout.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import OurStore from "./pages/OurStore.js";
import Blog from "./pages/Blog.js";
import CompareProduct from "./pages/CompareProduct.js";
import Wishlist from "./pages/Wishlist.js";
import Login from "./pages/Login.js";
import Forgotpassword from "./pages/Forgotpassword.js";
import Signup from "./pages/Signup.js";
import Resetpassword from "./pages/Resetpassword.js";
import SingleBlog from "./pages/SingleBlog.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import RefundPolicy from "./pages/RefundPolicy.js";
import ShippingPolicy from "./pages/ShippingPolicy.js";
import TermAndConditions from "./pages/TermAndConditions.js";
import SingleProduct from "./pages/SingleProduct.js";
import Cart from "./pages/Cart.js";
import Checkout from "./pages/Checkout.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<OurStore />} />
            <Route path="/store/product/:id" element={<SingleProduct />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="/compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
