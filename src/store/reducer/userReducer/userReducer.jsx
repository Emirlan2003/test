

export const ActionTypes = {
    GET_USER: "GET_USER"
}


const initState = {
    user: []
}

export const userReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.GET_USER:
            return { ...state, user: action.payload }
        default: 
             return state
    }
}