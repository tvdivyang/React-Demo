import React, { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../component/input";



export const Signup = () => {
  const history = useNavigate();
  const [inpval, setinpval] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [data, setdata] = useState([]);
  const [error, seterror] = useState({});

  const getdata = (e) => {
    const { value, name } = e.target;
    setinpval({ ...inpval, [name]: value });
    seterror({ ...error, [name]: null });
  };

  const addDate = (e) => {
    e.preventDefault();
    const { username, email, mobile, password } = inpval;
    var errors = {};
    if (!username || !isNaN(username)) {
      // seterror("please enter a valid username");
      errors.username = " username Required";
    }
    if (!email) {
      errors.email = " email Required";
      console.log("enter email");
    }
    if (!password || password.length <= 5) {
      errors.password = " password Required";
    }
    if (!mobile || mobile.length < 10) {
      // seterror("please enter a valid username");
      errors.mobile = " mobile Required";
    } else {
      console.log("success");
      localStorage.setItem("postdata", JSON.stringify([...data, inpval]));
      history("/login");
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
              onChange={(name, value) => getdata(name, value)}
            />
            {/* {validation.lName && <p>{validation.username}*/}
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
            <p className="text-danger">{error?.password}</p>
          </div>
          <div className="mb-5 w-50">
            <h6>Enter Mobile Number</h6>
            <input
              type="text"
              className="form-control"
              name="mobile"
              onChange={getdata}
            />
            <p className="text-danger">{error?.mobile}</p>
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
