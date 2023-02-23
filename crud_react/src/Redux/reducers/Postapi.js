const initialState = [];

const changeTheNumber = (state = initialState, action) => {
  console.log("action",action)
  switch (action.type) {
    case "INCREMENT":
      return { ...state, initialState: action.data };
      case "DELET_PRODUCT":
        console.log("state", state);
        return  {...state}
        case "UPDATE_PRODUCT":
        console.log("state", state);
        return  {...state}
        case "UPDATE_DATAS":
        console.log("state", state);
        return  {...state}


    default:
      return state;
  }
};

export default changeTheNumber;
