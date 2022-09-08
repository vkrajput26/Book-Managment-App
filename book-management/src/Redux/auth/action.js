import * as types from "./actionType"
import axios from "axios"

const login=()=>dispatch=>{
    dispatch({type:types.USER_LOGIN_REQUEST})

    return axios.post("http://localhost:8080/books")
    .then((r)=>{
        dispatch({type: types.USER_LOGIN_SUCCESS,payload:r.data.token})
    })
    .catch((e)=>{
        dispatch({type: types.USER_LOGIN_SUCCESS, payload:e})
    })
}

export {login}