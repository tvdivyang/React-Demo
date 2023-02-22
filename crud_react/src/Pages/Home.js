import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../App.css";
import { useState } from "react";
import axios from "axios";
import { signupData } from "../Utils/index";
import Input from "../component/Input";

const Home = () => {
  // get api start
  const [user, setUser] = useState([]);

  const [isDisabled, setIsdisabled] = useState(false);

  const fetchData = async () => {
    await axios
      .get("http://localhost:7001/todos")
      .then((data) => setUser(data.data));
  };
  fetchData();
  // get api end
  //post api start
  const [inpval, setinpval] = useState({
    _id: "",
    Name: "",
    Email: "",
    Birthdate: "",
    Password: "",
  });
  useEffect(() => {

  },[]);
  const [error, seterror] = useState({});
  const [success, setSuccess] = useState("");

  const getdata = (name, value) => {
    setinpval({ ...inpval, [name]: value });

    seterror({ ...error, [name]: null });
  };
  const addDate = () => {
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
      const postData = async () => {
        await axios
          .post("http://localhost:7001/todos", inpval)
          .catch((error) => {
            console.log("error", error);
            setinpval(inpval);
            setSuccess("User already registered");
          });
      };
      setSuccess("Registration successful");
      postData();
      setinpval("");

    }
    seterror(errors);
  };

  // post api end
  // detle api calling start
  const deleteData = async (_id) => {
    await axios.delete(`http://localhost:7001/todos/${_id}`);
  };

  // detle api calling end
  const edite = (_id) => {
    console.log("id", _id);
    const users = user.filter((item) => item._id === _id);
    console.log("2121212", users[0]);
    setinpval(users[0]);
    setIsdisabled(true);
  };

  const updates = async (_id) => {
    const data = await axios.put(`http://localhost:7001/todos/${_id}`, inpval);
    console.log("updatedata ", data.config.data);
    setinpval("");
    setSuccess("")
  };

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
                              <h3
                                className={
                                  success
                                    ? success === "Registration successful"
                                      ? "text-success text-center"
                                      : "text-danger text-center"
                                    : ""
                                }
                              >
                              {success  && <>{success}</> }
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
                     data-bs-dismiss="modal"
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        if (!isDisabled) {
                          addDate();
                        } else {
                          updates();
                        }
                      }}
                    >
                      {!isDisabled ? "save data" : "update"}
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
                  return (
                    <tr key={index}>
                      <td>{item.Name}</td>
                      <td>{item.Email}</td>
                      <td>{item.Birthdate}</td>
                      <td>
                        <button
                          className="me-3"
                          onClick={(id) => edite(item._id)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button onClick={(id) => deleteData(item._id)}>
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
