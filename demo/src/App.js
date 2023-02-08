import "./App.css";
import React, { Component } from "react";
import Count from "./Count";
import UseRef from "./UseRef";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Protel from "./protel";
import ReactDOM from "react-dom/client";
import {motion} from "framer-motion";

import {logo }from "./assets/index";

export default class App extends Component {
  constructor() {
    super();
    this.state = { name: "Good Morning ", count: 0, show: true };
    console.log(this.state.count);
  }
  name = "Divyang";
  componentDidMount() {
    console.log("componentDidMount:hello");
  }

  render() {
    function click() {
      console.log("class", this.state.name);
    }
    function Myclick() {
      // console.log("lifecycle",this.state.count);
      this.setState({ count: this.state.count + 1 });
    }

    return (
      <>
        <div>
          <h5>React Jsx</h5>
          hello {this.name}
        </div>
        <hr />
        <div>
          <h5>class component </h5>
          <button className="mb-3" onClick={click.bind(this)}>
            click cls
          </button>
        </div>
        <hr />
        <div>
          <h5>Life Cycle</h5>
          <Count number={this.state.count} />
          <button className="mb-3" onClick={Myclick.bind(this)}>
            {" "}
            count + 1
          </button>
          {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
        </div>
        <hr />

        <div>
          <h5>UseRef</h5>
          <UseRef></UseRef>
        </div>
        <hr />

        <div>
          <div>{this.state.show ? <Count /> : ""}</div>
          <h5>componentWillUnmountm</h5>
          <button onClick={() => this.setState({ show: !this.state.show })}>
            WillUnmountm
          </button>
        </div>

        <hr></hr>
        <div>
          <Tippy content="hello i am divyang">
            <button>Tooltip</button>
          </Tippy>
        </div>
        <hr />
        <div id="myDIV">
          <h6>css style </h6>
        </div>
        <hr/>
        <div>
          <h5>Animation</h5>
          <motion.div animate={{scale:1.5,borderRadius:"25%",  transform: "rotate(20deg)"}} className="animation"></motion.div>
          <motion.button animate={{rotate:360,scale:1.5}} className="m-5">Rotate</motion.button>
        </div>
        <hr/>

        <div className="container" style={{background:"#eae3e369"}}  data-aos="flip-left">
          <div className="row">
            <div className="col-6 text-center" style={{background:"#6dcfee"}}>
            <img src={logo} alt="img not found" className="mt-5"/>
            </div>
            <div className="col-6">
              <h5>ANIMATION</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, suscipit.</p>
              <button type="button" className="btn btn-primary">submit</button>
            </div>
          </div>
        </div>
        <hr/>

        <div className="container" style={{background:"#eae3e369"}}  data-aos="slide-down">
          <div className="row">
            <div className="col-6 text-center" style={{background:"#6dcfee"}}>
            <img src={logo} alt="img not found" className="mt-5"/>
            </div>
            <div className="col-6">
              <h5>ANIMATION</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, suscipit.</p>
              <button type="button" className="btn btn-primary">submit</button>
            </div>
          </div>
        </div>
        <hr/>

        <div className="container" style={{background:"#eae3e369"}}  data-aos="zoom-in-up">
          <div className="row">
            <div className="col-6 text-center" style={{background:"#6dcfee"}}>
            <img src={logo} alt="img not found" className="mt-5"/>
            </div>
            <div className="col-6">
              <h5>ANIMATION</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, suscipit.</p>
              <button type="button" className="btn btn-primary">submit</button>
            </div>
          </div>
        </div>
        <hr/>

        <div className="container" style={{background:"#eae3e369"}}  data-aos="top-center">
          <div className="row">
            <div className="col-6 text-center" style={{background:"#6dcfee"}}>
            <img src={logo} alt="img not found" className="mt-5"/>
            </div>
            <div className="col-6">
              <h5>ANIMATION</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, suscipit.</p>
              <button type="button" className="btn btn-primary">submit</button>
            </div>
          </div>
        </div>
        <hr/>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("newRoot"));
root.render(<Protel></Protel>);
// const shoot = () => {
//   document.getElementById("hy").innerHTML = "jay swaminarayan";
// }

// function App() {
//   return (
//     <>
//     <div className="container m-5 text-center">
//     <p>onClick Event</p>
//      <button onClick={shoot}>Take the shot!</button>
//    <p id="hy">hello good morning</p></div>
// </>

//     );
//   }

// import React from 'react';
// import Count from './Count';

// class App extends React.Component {
//    constructor() {
//       super();
//       this.state = {
//          delete: false,
//       };
//    }
//    render() {
//       return (
//          <div>
//             <h1>User List</h1>
//             <button onClick={() => this.setState({ delete: true })}>
//                Delete Users
//             </button>
//             {this.state.delete ? null : <Count/>}
//          </div>
//       );
//    }
// }

// export default App;
