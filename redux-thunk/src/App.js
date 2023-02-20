import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber} from "./actions/index";

function App() {
  const mystate = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
console.log("mystate",mystate)
  return (
    <>
      <div className="container text-center   flex-column ">
        <h1>Using React and Redux</h1>

        <div
          className="redux text-center m-auto mt-5">
          <input
            type="text"
            className=""
            value={mystate} />
          <button
            type="button"
            className="fs-2 ms-3 border-0 w-25 "
            onClick={() => dispatch(incNumber())}
            style={{ background: "#b3b1ab" }}> +
          </button>
        </div>
      </div>
      <hr />

      <h1 className="text-center m-4">API CALLING</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {mystate.map((item, index) => {
            console.log("item",item);
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>
                  <img src={item.avatar} alt="" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
