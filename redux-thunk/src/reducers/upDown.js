const initialState = [];

const changeTheNumber = (state = initialState, action) => {
  console.log(action.type);
  console.log("actiona",action)
  switch (action.type) {
    case "INCREMENT":
    return [action.data]

    default:
      return state;
  }
};

export default changeTheNumber;
