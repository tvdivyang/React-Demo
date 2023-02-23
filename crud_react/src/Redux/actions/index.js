import axios from "axios";

export const getDatas = () => {
  return async (dispatch) => {
    // alert("get data");
    const data = await axios.get("http://localhost:7001/todos");
    dispatch({ type: "INCREMENT", data: data.data });
  };
};

export const deletePRoduct = (_id) => {
  return async (dispatch) => {
    const data = await axios.delete(`http://localhost:7001/todos/${_id}`);
    console.log("deket data", data);
    dispatch(getDatas());
    dispatch({ type: "DELET_PRODUCT" });
  };
};
export const updatePRoduct = (_id) => {
  console.log("updatePRODUCT id",_id)
  return async (dispatch) => {
    const data = await axios.get("http://localhost:7001/todos");
    console.log("9909224875",data)
    const users = data.filter((item)=> item._id === _id);
    console.log("======>>>>>>>>>>",users[0])
    // const data = await axios.put(`http://localhost:7001/todos/${_id}`);
  //  const users = user.filter((item)=> item._id === _id);
    // console.log(user[0])
    dispatch({ type: "UPDATE_PRODUCT" });
  };
};

export const updateDatas = (_id) => {
  console.log("update id",_id)
  return async (dispatch) => {
    const data = await axios.put(`http://localhost:7001/todos/${_id}`);
  //  const users = user.filter((item)=> item._id === _id);
    // console.log(user[0])
    dispatch({ type: "UPDATE_DATAS" });
  };
};

// const edite = (_id) => { 
//   console.log("id", _id);
//   const users = mystate.filter((item) => item._id === _id);
//   console.log("2121212", users[0]);
//   setinpval(users[0]);
//   setIsdisabled(true);
// };