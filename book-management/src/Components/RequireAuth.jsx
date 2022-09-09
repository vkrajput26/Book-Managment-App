


import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

//children refers to the edit page.
const  RequireAuth=({children})=> {
   const auth =useSelector(state=>state.authReducer.isAuth)
    const location=useLocation()
    console.log("location",location)

    if(!auth){
        return    <Navigate to="/login" replace state={{
            data:location.pathname,
            //here state help in redirecting to another pg,we write in 
            //this form so we can get the data(pathname) in login pg directly
        }} />    
    }
   
    return children
}

export default RequireAuth;