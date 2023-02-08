import "./App.css";

import { Footer } from "./component/footer";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Details from "./component/details";
import "react-tooltip/dist/react-tooltip.css";
import Notestate from "./context/Notestate";
import { Suspense, lazy } from "react";
import React from "react";

const Navbar = lazy(() => import("./component/navbar/index"));

function App() {
  return (
    <>
      <Suspense fallback={<h1>loading... Navbar</h1>}>
        <Navbar />

      </Suspense>
      <Notestate>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
      </Notestate>
    </>
  );
}

export default App;
