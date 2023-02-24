import { useEffect, useState } from "react";
import Input from "../component/Input";
import "react-toastify/dist/ReactToastify.css";
import { signup } from "../Utils";
import { updateDatas } from "../Redux/actions/index";
import { useDispatch } from "react-redux";
import React from "react";

const UserEdit = (props) => {
  //post api start
  const [inpval, setinpval] = useState({
    _id: "",
    Name: "",
    Email: "",
    Birthdate: "",
    Password: "",
  });

  useEffect(() => {
    setinpval(props.data);
  },[]);

  const getdata = (name, value) => {
    setinpval({ ...inpval, [name]: value });
  };

  const dispatch = useDispatch();

  const updateDatasaa = () => {
    dispatch(updateDatas(props, inpval));
    props.handalclose();
  };

  return (
    <>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className=" mt-5">
              <div className="row">
                <div className="col ">
                  <div className="card">
                    <div className="card-body ">
                      <h3 className="card-title mb-3 text-center">Sign Up</h3>

                      {signup.map((item, index) => {
                        return (
                          <Input
                            key={index}
                            item={item}
                            className="form-control"
                            value={inpval}
                            onChange={(name, value) => getdata(name, value)}
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
              onClick={() => props.handalclose()}
            >
              Close
            </button>
            <button
              data-bs-dismiss="modal"
              type="button"
              className="btn btn-primary"
              onClick={() => updateDatasaa()}
            >
              update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEdit;
