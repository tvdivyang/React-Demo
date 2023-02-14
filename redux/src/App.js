import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const mystate = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container text-center   flex-column ">
        <h1>Using React and Redux</h1>

        <div
          className="redux text-center m-auto mt-5"
          style={{ background: "#b3b1ab", width: "250px" }}>
          <button
            type="button"
            className="me-3 border-0 w-25 fs-2 ms-3"
            onClick={() => dispatch(decNumber())}
            style={{ background: "#b3b1ab" }}> -
          </button>

          <input
            type="text"
            className="text-decoration-none border-0 text-center w-25 mt-2 "
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
    </>
  );
}

export default App;
