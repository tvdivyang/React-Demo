import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";


function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default Router;
