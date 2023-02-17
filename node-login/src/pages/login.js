import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loginindex from "../input/loginindex";
import { Logins } from "../utils/index";

export const Login = () => {
  const history = useNavigate();
  const hist = useNavigate();
  const Islogin = localStorage.getItem("postdata");
  useEffect(() => {
    if (Islogin) hist("/home");
  }, []);

  const [inpval, setinpval] = useState({
    Email: "",
    Password: "",
  });

  const getdata = (name, value) => {
    setinpval({ ...inpval, [name]: value });
    seterror({ ...error, [name]: null });
  };

  const [success, setSuccess] = useState("");
  const [error, seterror] = useState({});
  const addDate = async (e) => {
    e.preventDefault();
    var errors = {};
    const { Email, Password } = inpval;

    if (!Email) {
      errors.Email = "email Required";
      console.log("emagil");
    }
    if (!Password || Password.length <= 5) {
      errors.Password = " password Required";
      console.log("passsssss");
    } else {
      const data = await axios.post("http://localhost:7001/login", inpval);
      console.log("login data", data);

      if (data.status === 200) {
        console.log("hello 200");
        localStorage.setItem("postdata", JSON.stringify([inpval]));
        console.log("hello");
        history("/home");
      } else if (data.status === 400) {
        setSuccess("please enter valid value");
        console.log("helllo");
      }

      // const postdata = async() => {
      //   alert("desdcsdc")
      //   const data = await axios.post("http://localhost:7001/login",inpval)
      //   console.log("login data",data)

      // if (getuserArr && getuserArr.length) {
      //   const userdata = JSON.parse(getuserArr);
      //   // console.log("userdata", userdata);

      //   const userlogin = userdata.filter((Ele, index) => {
      //     return Ele.email === Email && Ele.password === Password;
      //   });
      //   console.log("userloginnnn", userlogin);
      //   // console.log(userlogin);
      //   if (userlogin.length === 0) {
      //     setSuccess("please enter valid value");
      //     console.log(inpval);
      //     postdata()
      //   } else {
      //   //   history("/details");
      //   console.log("data successfuly");
      //   console.log(inpval);
      //   }
      // }
    }
    seterror(errors);
  };
  // console.log(inpval);

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
