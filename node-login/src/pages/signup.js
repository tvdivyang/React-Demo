import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Input from "../input";
import { Signupdata } from "../utils/index";


export const Signup = () => {
  const hist = useNavigate();
  const Islogin = localStorage.getItem("postdata");
  useEffect(()=>{
if(Islogin)
hist("/home");
},[])
  const [inpval, setinpval] = useState({
    Name: "",
    Email: "",
    Birthdate: "",
    Password: "",
  });

  const [error, seterror] = useState({});
  const [success, setSuccess] = useState("");

  const getdata = (name, value) => {
    setinpval({ ...inpval, [name]: value });
    seterror({ ...error, [name]: null });
  };
  const addDate = (e) => {
    e.preventDefault();
    const { Name, Email, Password, Birthdate } = inpval;
    console.log("adddata", inpval);
    var errors = {};
    if (!Name || !isNaN(Name)) {
      errors.Name = " username Required";
    }
    if (!Email) {
      errors.Email = " email Required";
    }
    if (!Birthdate) {
      errors.Birthdate = "Brithdate Required";
    }
    if (!Password || Password.length <= 5) {
      errors.Password = " password Required";
    } else {
      setSuccess("Registration successful");
 
      postData();
    }

    seterror(errors);
    setinpval("");
  };
  console.log(inpval);

  const postData = async () => {
    const data = await axios.post("http://localhost:7001/todos", inpval);
    console.log("data", data);
  };
  // const postData = ()=>{
  // const { Name, Email, Birthdate, hash_password} = inpval;
  // const data = fetch("http://localhost:7001/todos",{
  //   method:"POST",
  //   Headers:"/todos",
  //   body:JSON.stringify({
  //     Name, Email, Birthdate, hash_password
  //   })
  // })
  //  console.log("database conntione", data)
  // }
  return (
    <>
      <div>
        <form className="container align-items-center d-flex flex-column">
          <h4 className="m-5 text-center"> Registration Form</h4>
          <h4 className="text-center text-success "> {success}</h4>
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
          <button
            type="button"
            className="btn btn-lg btn-block mb-3"
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
