import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { signupData } from "../Utils/index";
import Input from "../component/Input";

const Home = () => {
  // get api start
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    await axios
      .get("http://localhost:7001/todos")
      .then((data) => setUser(data.data));
  };
  useEffect(() => {
    fetchData()

// console.log("data===>>>>>>",fetchData())
  }, []);
  // get api end

  //post api start
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
    console.log("datatatatat ===== ", inpval);
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
 

  const postData = async () => {
    const data = await axios.post("http://localhost:7001/todos", inpval);
    console.log("data", data);
  };
  // post api end

  // detle api calling start
  const deleteData = async(id)=>{
    const delet = await axios.delete(`http://localhost:7001/todos/`)
    
  if(delet.status === 200){
    console.log("1111111",delet.data.message)
  }
   console.log("99015515451",delet)
  }
  // detle api calling end
  return (
    <>
      {/* heading start */}
      <div className="container">
        <div className="row">
          <div className="col">
            <motion.h1
              className="text-center m-4 animaton"
              animate={{
                rotate: 360,
                scale: 1,
                transition: "9.9s",
                color: "#22777a",
              }}
            >
              CRUD_REACT
            </motion.h1>
            {/* heading end  */}

            {/* button data add  strat */}
            <button
              className=" right-0 position-absolute end-0 top border-0"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="fa-regular fa-plus  "></i>
            </button>
            {/* button data add end  */}
            {/* modal start */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className=" mt-5">
                      <div className="row">
                        <div className="col ">
                          <div className="card">
                            <div className="card-body ">
                              <h3 className="card-title mb-3 text-center">
                                Sign Up
                              </h3>
                              <h3 className="text-success text-center">
                                {success}
                              </h3>
                              {signupData.map((item, index) => {
                                return (
                                  <Input
                                    key={index}
                                    item={item}
                                    className="form-control"
                                    value={inpval}
                                    errr={error}
                                    onChange={(name, value) =>
                                      getdata(name, value)
                                    }
                                  ></Input>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={addDate}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* modal end  */}
            {/* post api table start  */}
            <table className="table table-bordered mt-5">
              <thead>
                <tr>
                  <th scope="col"> Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Birthdate</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {user.map((item, index) => {
                  console.log(item.id)
                  return (
                    <tr key={index}>
                   
                      <td>{item.Name}</td>
                      <td>{item.Email}</td>
                      <td>{item.Birthdate}</td>
                      <td>
                        <button className="me-3">
                          <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button onClick={(e,id) => deleteData(item.id)}  >
                          <i className="fa-solid fa-trash text-center"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* post api table end  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
