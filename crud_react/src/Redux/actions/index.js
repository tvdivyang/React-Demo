import axios from "axios";

export const getDatas = () => {
  return async (dispatch) => {
    const data = await axios.get("http://localhost:7001/todos");
    dispatch({ type: "INCREMENT", data: data.data });
  };
};

export const deletePRoduct = (_id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:7001/todos/${_id}`);

    dispatch(getDatas());
    dispatch({ type: "DELET_PRODUCT" });
  };
};
export const updatePRoduct = () => {
  return () => {
     axios.get("http://localhost:7001/todos");
  };
};

export const updateDatas = (_id,inpval) => {

  return async (dispatch) => {
    await axios.put(`http://localhost:7001/todos/${_id}`,inpval);

    dispatch(getDatas());
    dispatch({ type: "UPDATE_DATAS" });
  
  };
};

export const postdatas = (inpval) => {

  return async (dispatch) => {
     await axios.post("http://localhost:7001/todos", inpval);

    dispatch(getDatas());
    dispatch({ type: "INSERT_PRODUCT" });

  };
};

// export const stateget = () => {

//   return async (dispatch) => {
   
// console.log("state get api",data)
//     // dispatch(getDatas());
//     dispatch({ type: "INSERT_PRODUCT" });

//   };
// };
