import React, { Component } from 'react'

export class Protel extends Component {
  render() {
    return (
        <>
        <footer style={{ backgroundColor: "#0D2753" }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 mt-3 mb-4 text-white">
                <h6 className="mt-2">Serving Quality with Technology </h6>
                <h5 className="mb-2">Our Social Networks</h5>
                <div>
                  <i className="me-2 fa-brands fa-skype rounded-circle "></i>
                  <i className="me-2 fa-brands fa-square-twitter rounded-circle "></i>
                  <i className="me-2 fa-brands fa-linkedin"></i>
                  <i className="me-2 fa-brands fa-square-twitter rounded-circle "></i>
                  <i className="me-2 fa-brands fa-facebook rounded-circle "></i>
                </div>
                <h5 className="mb-2"> our presence </h5>
                <div >
                  <i className="me-2 fa-brands fa-square-behance rounded-circle"></i>
                  <i className="me-2 fa-regular fa-basketball rounded-circle"></i>
                  <i className="me-2 fa-brands fa-github rounded-circle"></i>
                  <i className="me-2 fa-brands fa-pinterest rounded-circle"></i>  
                  <i className="me-2 fa-brands fa-medium rounded-circle"></i>
                </div>
  
              </div>
              <div className="col-xl-2 text-white">Portals</div>
              <div className="col-xl-3 text-white">Portals</div>
              <div className="col-xl-3 text-white">Portals</div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Protel
