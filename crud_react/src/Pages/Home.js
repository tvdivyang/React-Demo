import { motion } from "framer-motion";
import "../App.css";
import { useEffect, useState } from "react";
import { signupData } from "../Utils/index";
import Input from "../component/Input";
import { useSelector, useDispatch } from "react-redux";
import {
  getDatas,
  deletePRoduct,
postdatas
} from "../Redux/actions/index";
import { UserEdit } from "../model";
const Home = () => {
 
  const [inpval, setinpval] = useState({
    _id: "",
    Name: "",
    Email: "",
    Birthdate: "",
    Password: "",
  });

 
  const [open, setOpen] = useState(false);
  const [save,setSave] = useState();

  const getdata = (name, value) => {
    setinpval({ ...inpval, [name]: value });

  };

  const mystate = useSelector((state) => state.changeTheNumber.initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);

  const helloo = (item) => {
    setSave(item);
    setOpen(true);
  };
  const handalclose = () => {
    setOpen(!open)
  }

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
                              {signupData.map((item, index) => {
                                return (
                                  <Input
                                    key={index}
                                    item={item}
                                    className="form-control"
                                    value={inpval}
                                  
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
                      // onClick={addDate}
                      onClick={() => dispatch(postdatas(inpval))}
                    >
                    save data
                    
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* modal end  */}
            {/* post api table start  */}
         {open ?<UserEdit open={open} data={save} handalclose={handalclose}/>   : ""}   
            <table className="table table-bordered mt-5">
              <thead>
                <tr>
                  <th scope="col"> Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Birthdate</th>
                  <th scope="col">Actions</th>
                  <th scope="col">State</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                {mystate &&
                  mystate.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Name}</td>
                        <td>{item.Email}</td>
                        <td>{item.Birthdate}</td>
                        <td>{item.State}</td>
                        <td>{item.City}</td>
                        <td>
                          <button
                            className="me-3"
                        
                            onClick={() => helloo(item)}
                            // onClick={() => dispatch(updatePRoduct(item))}
                            // onClick=" <userEdite/>"
                          >
                            <i className="fa-regular fa-pen-to-square"></i>
                          </button>

                          <button
                            onClick={() => dispatch(deletePRoduct(item._id))}
                          >
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
