import "./App.css";
import React, { Component } from "react";
import Count from "./Count";
import UseRef from "./UseRef";

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
        <hr />
      </>
    );
  }
}

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
