import React from "react";
import { Route, Routes } from "react-router";
import { Footer } from "../componet/Footer";
import Navbar from "../componet/Navbar";
import Login from "../pages/login";
import { Signup } from "../pages/signup";
import PrivateRouter from "../componet/privateRouter";
import Home from "../pages/Home";
import Logout from "../pages/Logout";
function index() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default index;
