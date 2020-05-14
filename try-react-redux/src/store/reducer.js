const initialState = {
    name:'Nicha',
    age:'24',
    hobbies:'Programming'
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

        if(action.type ==='AGE_UP'){
            newState.age ++;
        }
        
        if(action.type ==="AGE_DOWN"){
            newState.age --;
        }

        if(action.type === 'CHANGE_NAME'){
            newState.name = 'Sarah';
        }
    return newState;
}
export default reducer;
