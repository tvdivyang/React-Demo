import { useEffect, useState } from "react";
import Input from "../component/Input";
import "react-toastify/dist/ReactToastify.css";
import { signup } from "../Utils";
import { getDatas, updateDatas } from "../Redux/actions/index";
import { useDispatch } from "react-redux";
import React from "react";
import axios from "axios";

const UserEdit = (props) => {
  console.log("00000000000000000000", props);
  //post api start_
  const [state_Id, setState_Id] = useState(props.stateId);
  console.log("==============-=-=", state_Id);
  const [inpval, setinpval] = useState({
    _id: "",
    Name: "",
    Email: "",
    Birthdate: "",
    Password: "",
    State: "",
    City: "",
  });
  console.log("hello12121", state_Id);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch, props]);


  const statedropdown = async () => {
    setinpval("");
    const data = await axios.get("http://localhost:7001/state");
    setState(data.data);
  };

  const stateselect = async (evenet) => {
    const getstateid = evenet.target.value;
    console.log("hello121210", getstateid);
    setState_Id(getstateid);
    cityselect(getstateid);
    const dtaa = state.find(
      (cur) => evenet.target.name && evenet.target.value === cur._id
    );

    // const default_satate = dtaa.id;
    // setStateId(default_satate);
    // console.log("setstatediddidididididididid",stateId)
    const State = dtaa.name;
    setinpval({ ...inpval, State });
  };

  const cityselect = async (getstateid) => {
    console.log("props.stateId", state_Id);
    console.log("getstateid", getstateid);
    const data = await axios.get(`http://localhost:7001/city/${getstateid}`);
    console.log("dataasss", data);
    setCity(data.data);
  };

  useEffect(() => {
    setinpval(props.data);
  }, [props.data]);

  const getdata = (name, value) => {
    setinpval({ ...inpval, [name]: value });
  };

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

                      <h6>Select State</h6>
                      <select
                        onChange={(e) => stateselect(e)}
                        className="form-select mb-3"
                        aria-label="Default select example"
                        name="State"
                        onClick={statedropdown}
                      >
                        {inpval ? <option>{inpval.State}</option> : ""}
                        {state?.map((item, index) => {
                          return (
                            <option
                              key={index}
                              value={item._id}
                              State={item.name}
                            >
                              {item.name}
                            </option>
                          );
                        })}
                      </select>

                      <h6>Select City</h6>
                      <select
                        onChange={(e) => getdata(e.target.name, e.target.value)}
                        className="form-select"
                        aria-label="Default select example"
                        name="City"
                      >
                        {inpval ? <option>{inpval.City}</option> : ""}
                        {city
                          ? city.map((item, index) => {
                              return (
                                <option value={item.name} key={index}>
                                  {item.name}
                                </option>
                              );
                            })
                          : ""}
                      </select>
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
