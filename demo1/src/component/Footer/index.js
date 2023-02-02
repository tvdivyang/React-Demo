import React from "react";
import logo from "../../assets/index";

export const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#0D2753" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mt-5 mb-4 text-white">
              <a className="" href="/">
                <img src={logo} alt="img not found" />
              </a>
              <h6 className="mt-2">Serving Quality with Technology </h6>
              <h5 className="mb-3">Our Social Networks</h5>
              <div>
              
              </div>
            </div>
            <div className="col-xl-2 text-white">hello</div>
            <div className="col-xl-3 text-white">hello</div>
            <div className="col-xl-3 text-white">hello</div>
          </div>
        </div>
      </footer>
    </>
  );
};
