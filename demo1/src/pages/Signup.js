import React, { useState } from "react";

export const Signup = () => {
  const [inpval, setinpval] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [data, setdata] = useState([]);
  const [error, seterror] = useState(null);

  const getdata = (e) => {
    const { value, name } = e.target;
    setinpval({ ...inpval, [name]: value });
  };

  const addDate = (e) => {
    e.preventDefault();

    const { username, email, mobile, password } = inpval;
    const emailv = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/;
    const mnumber = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const uservalidation =
      /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/;
    const passwordvalidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    var errors = error;
    if (!username.match(uservalidation)) {
      // seterror("please enter a valid username");
      errors = {
        ...error,
        username: "please enter a valid usename::::::",
      };
      console.log("errors", errors);
    } if (!email.match(emailv)) {
      errors = {
        ...error,
        email: "please enter a email::::::",
      };
      
      console.log("enter email");
    }  if (!password.match(passwordvalidation)) {
      console.log("enter password");
    }  if (!mobile.match(mnumber)) {
      console.log("enter number");
    } else {
      console.log("success");
      localStorage.setItem("postdata", JSON.stringify([...data, inpval]));
    }
    seterror(errors);
  };

  return (
    <>
      <div>
        <form className="container align-items-center d-flex flex-column">
          <h4 className="m-5 text-center"> Registration Form</h4>
          <div className="mb-3 w-50">
            <h6>Enter Your Name</h6>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={getdata}
            />

            <p className="text-danger">{error?.username}</p>
          </div>
          <div className="mb-3 w-50">
            <h6>Enter Email Address</h6>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={getdata}
            />
            <p className="text-danger">{error?.email}</p>
          </div>
          <div className="mb-3 w-50">
            <h6>Enter Password</h6>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={getdata}
            />
          </div>
          <div className="mb-5 w-50">
            <h6>Enter Mobile Number</h6>
            <input
              type="text"
              className="form-control"
              name="mobile"
              onChange={getdata}
            />
            {/* <span id="Ename">{error}</span> */}
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-lg btn-block"
              style={{ backgroundColor: "#87d3ec" }}
              onClick={addDate}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
