import React, { useContext, useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import noteContext from "../context/Notecontext";

export const Home = () => {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    return await fetch("https://reqres.in/api/users?page=2")
      .then((data) => data.json())
      .then((data) => setUser(data.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("user", user);

  const context = useContext(noteContext)
  return (
    <>
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
          {user.map((item, index) => {
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
      <Tippy content="i am a tooltip">
        <button>click me</button>
      </Tippy>
        <hr/>

        <div>
          <h1>context</h1>
          <p>{context.name}</p>
        </div>

    </>
  );
};
