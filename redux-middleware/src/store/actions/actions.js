export const loading = () => {
    return {type:"LOADING"}
}

// make ageUp async
export const ageUpAsync = (val) => {
    return { type: "AGE_UP", value:val }
}

export const ageUp = (val) => {
    return dispatch => {
        // synchronous part (dispatch(loading()) happens right away)
        dispatch(loading());
        // But the addition happens later on
        setTimeout(() => {
            val++
            dispatch(ageUpAsync(val))
        }, 5000);
    }
}

export const ageDown = (val) => {
    return { type: "AGE_DOWN", value:val }
}