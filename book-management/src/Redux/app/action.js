
import * as types from "./actionType"
import axios from "axios"
const getBook= (params) => (dispatch)=>{
    dispatch({type: types.GET_BOOK_REQUEST});
    return axios.get("http://localhost:8080/books",params)
    .then((r)=>{
        dispatch({type:types.GET_BOOK_SUCCESS, payload:r.data})
    })
    .catch((e)=>{
        dispatch({type:types.GET_BOOK_FAILURE, payload:e})
    })
}
export {getBook}