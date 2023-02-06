import React, { useEffect, useState } from "react";

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
                <td><img src={item.avatar}></img></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
