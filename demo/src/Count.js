import React, { Component } from "react";

export default class Count extends Component {
  shouldComponentUpdate() {
    console.log("should Update", this.props.number);
    if (this.props.number < 10) {
      return true;
    }
  }

  componentDidUpdate(prevprops) {
    if (prevprops.number !== this.props.number) {
      console.log("componet update");
    }
  }

  componentWillUnmount() {
    console.log("WillUnmount");
  }
  render() {
    return (
      <div>
        <h3>LifeCycle -: {this.props.number}</h3>
      </div>
    );
  }
}
// import React from "react";

// class User extends React.Component {

//   render() {
//      return (
//         <div>
//            <h3>Username: Rahul</h3>
//            <h3>Email: rbbansal558@gmail.com</h3>
//         </div>
//      );
//   }
// }
// export default User;
