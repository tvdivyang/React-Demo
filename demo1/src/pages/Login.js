import React, { useState } from "react";
import { useNavigate } from "react-router";
import Loginindex from "../component/input/loginindex";
import { Logins } from "../utils/index";

export const Login = () => {
  const history = useNavigate();

  const [inpval, setinpval] = useState({
    email: "",
    password: "",
  });
  const getuserArr = localStorage.getItem("postdata");

  const getdata = (name, value) => {
    setinpval({ ...inpval, [name]: value });
    seterror({ ...error, [name]: null });
  };

  const [success, setSuccess] = useState("");
  const [error, seterror] = useState({});
  var errors = {};
  const addDate = (e) => {
    e.preventDefault();

    const { email, password } = inpval;
    

    if (!email) {
      errors.email = "email Required";
    }
    if (!password || password.length <= 5) {
      errors.password = " password Required";
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        console.log("userdata", userdata);

        const userlogin = userdata.filter((Ele, index) => {
          return Ele.email === email && Ele.password === password;
        });
        console.log("userloginnnn", userlogin);
        // console.log(userlogin);
        if (userlogin.length === 0) {
          setSuccess("please enter valid value");
        } else {
          history("/details");
        }
      }
    }
    seterror(errors);
  };

  return (
    <>
      {" "}
      <h5 className="text-danger text-center mt-5">{success} </h5>
      <div>
        <form className="container align-items-center d-flex flex-column">
          <h4 className="m-5 text-center"> Login Form</h4>
          <div className="mb-3 w-50">
            {Logins.map((item, index) => {
              console.log(item);

              return (
                <Loginindex
                  key={index}
                  item={item}
                  errr={error}
                  value={inpval}
                  className="form-control"
                  onChange={(name, value) => getdata(name, value)}
                />
              );
            })}
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
