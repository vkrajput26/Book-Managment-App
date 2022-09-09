import * as types from "./actionType"
import axios from "axios"

const login=(payload)=>dispatch=>{
    dispatch({type:types.USER_LOGIN_REQUEST})

    return axios.post("https://reqres.in/api/login",payload)
    .then((r)=>{
      return  dispatch({type: types.USER_LOGIN_SUCCESS,
        payload:r.data.token})
    })
    .catch((e)=>{
        dispatch({type: types.USER_LOGIN_SUCCESS, payload:e})
    })
}

export {login}