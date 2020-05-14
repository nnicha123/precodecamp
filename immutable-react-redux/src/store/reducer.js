const initialState = {
  age: 20,
  history:[]
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP":
      // newState.age += action.value;
      return{
        ...state,
        age:state.age + action.value,
        history:state.history.concat({age:state.age + action.value})
      }
      break;

    case "AGE_DOWN":
      // newState.age += action.value;
      return{
        ...state,
        age:state.age - action.value,
        history:state.history.concat({age:state.age - action.value})
      }
      break;
  }
  return newState;
};

export default reducer;
