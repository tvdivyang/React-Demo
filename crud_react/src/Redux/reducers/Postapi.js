const initialState = [];

const changeTheNumber = (state = initialState, action) => {

  switch (action.type) {
    case "INCREMENT":
      return { ...state, initialState: action.data };
      case "DELET_PRODUCT":
        
        return  {...state}
        case "UPDATE_PRODUCT":
        return  {...state}
        case "UPDATE_DATAS":
        return  {...state} 
        case "INSERT_PRODUCT":
        return  {...state}


    default:
      return state;
  }
};

export default changeTheNumber;
