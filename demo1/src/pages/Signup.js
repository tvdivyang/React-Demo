import React, { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../component/input";
import { Signupdata } from "../utils/index";

export const Signup = () => {
  const history = useNavigate();
  const [inpval, setinpval] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
  });

  // const [data, setdata] = useState([]);
  const [error, seterror] = useState({});

  const getdata = (name,value) => {
    
    setinpval({ ...inpval, [name]: value });
    seterror({ ...error, [name]: null });
  };
  const addDate = (e) => {
    e.preventDefault();
    const { username, email, mobile, password } = inpval;
    console.log("adddata",inpval)
    var errors = {};
    if (!username || !isNaN(username)) {
      errors.username = " username Required";
      // console.log("enter username !!")
    }
    if (!email) {
      errors.email = " email Required";
      // console.log("enter email");
    }
    if (!password || password.length <= 5) {
      errors.password = " password Required";
      // console.log("enter password !!")
    }
    if (!mobile || mobile.length < 10) {
      errors.mobile = " mobile Required";
      // console.log("enter mobile !!")
    } else {
      console.log("success");
      localStorage.setItem("postdata", JSON.stringify([inpval]));
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
            {Signupdata.map((item, index) => {
              return (
                <Input
                  key={index}
                  item={item}
                  className="form-control"
                  value={inpval}
                  errr={error}
                  onChange={(name, value) => getdata(name, value)}
                ></Input>
              );
            })}
          </div>

            {/* <p className="text-danger">{error?.username}</p> */}
            {/* <p className="text-danger">{error?.mobile}</p> */}
            <button
              type="button"
              className="btn btn-lg btn-block"
              style={{ backgroundColor: "#87d3ec" }}
              onClick={addDate}
            >
              Sign Up
            </button>
        </form>
      </div>
    </>
  );
};
