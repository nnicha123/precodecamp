const initialState = {
    name:'Nicha',
    age:'24',
    hobbies:'Programming'
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case "AGE_UP":
            newState.age += action.value;
            break;

        case "AGE_DOWN":
            newState.age -= action.value;
            break;
        
        case "CHANGE_NAME":
            newState.name = 'Sarah';
            break;
    }
}
export default reducer;
