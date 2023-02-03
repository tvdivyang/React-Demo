import React from "react";
import { Navigate, useNavigate } from "react-router";
// import login from "../../pages/Login";
export const Details = () => {

  const history = useNavigate();
  const getuser = localStorage.getItem("postdata");

  const removedata = () => {
    localStorage.removeItem("postdata");
    history("/details");
  };

  if (getuser) {
    return (
      <>
        <h1 className="text-center"> hello</h1>
        <br />
       
        <button className="btn btn-lg btn-block m-auto d-flex" style={{ backgroundColor: "#87d3ec" }} onClick={removedata}> Log Out </button>
      </>
    );
  } else {
    return <Navigate to={"/login"} />;
  }
  // return (
  //   <>
  //   <h1>hellooooo</h1>
  //   </>
  // )
};
export default Details;
