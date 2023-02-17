import React from "react";
import { Navigate, Outlet } from "react-router";

function PrivateRouter() {
  const Islogin = localStorage.getItem("postdata");

  if (Islogin) {
    return (
      <>
        <Outlet />
      </>
    );
  } else {
    return (
      <>
        hello
        <Navigate to={"/login"} />
      </>
    );
  }
}

export default PrivateRouter;
