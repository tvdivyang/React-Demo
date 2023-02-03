import React, { useState } from "react";
import { useNavigate } from "react-router";

export const Login = () => {
  const history = useNavigate();

  const [inpval, setinpval] = useState({
    email: "",
    password: "",
  });
  const getuserArr = localStorage.getItem("postdata");

  const getdata = (e) => {
    const { value, name } = e.target;
    setinpval({ ...inpval, [name]: value });
  };

  const [error, seterror] = useState({});
  var errors = {};
  const addDate = (e) => {
    e.preventDefault();

    const { email, password } = inpval;
    // const emailv = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/;

    // console.log(inpval);

    if (!email) {
      errors.email = "email Required";
    }
    if (!password || password.length <= 5) {
      errors.password = " password Required";
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        console.log("userdata",userdata);

        const userlogin = userdata.filter((Ele, index) => {
          return Ele.email === email && Ele.password === password;

        });
        console.log("userloginnnn",userlogin);
        // console.log(userlogin);

        if (userlogin.length === 0) {
          alert("please enter valid value");
        } else {
          history("/details");
        }
      }
    }
    seterror(errors);
  };

  return (
    <>
      <div>
        <h4 className="m-5 text-center"> Login Form</h4>
        <form className="container align-items-center d-flex flex-column">
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
            <p className="text-danger">{error?.password}</p>
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-lg btn-block"
              style={{ backgroundColor: "#87d3ec" }}
              onClick={addDate}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};


export default Login;
