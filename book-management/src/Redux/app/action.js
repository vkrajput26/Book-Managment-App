
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
};

//UPDATE
const updateBook = (id,payload) => dispatch =>{
    dispatch({type: types.PATCH_BOOK_REQUEST});
    return axios.patch(`http://localhost:8080/books/${id}`,payload)
    .then(r=> {
        dispatch({type:types.PATCH_BOOK_SUCCESS, payload:r.data})
    })
    .catch((e)=>{
        dispatch({type: types.PATCH_BOOK_FAILURE,payload:e});
    })
}
export {getBook,updateBook}