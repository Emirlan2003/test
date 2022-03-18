import axios from "axios"
import { ActionTypes } from "../reducer/userReducer/userReducer"

export const getUser = () => {
    return async (dispatch) => {
        try{
             const res = await axios.get('http://localhost:8000/posts')
             dispatch({ type: ActionTypes.GET_USER, payload: res.data})
        }catch(e){
            console.log(e)
        }
    }
}