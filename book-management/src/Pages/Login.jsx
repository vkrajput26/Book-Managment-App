

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../Redux/auth/action';


const Login=()=> {
    
    const [email,setEmail]=useState("eve.holt@reqres.in")
    const [password,setPassword]=useState("cityslicka");
    const dispatch=useDispatch()
    const navigate= useNavigate()
    const location =useLocation();
    const comingfrom=location.state?.data || '/'
    console.log("comingfrom", comingfrom)



   const handleSubmit=(e)=>{
     e.preventDefault();
     if(email && password){
        dispatch(login({email,password})).then((r)=>{
            // console.log("login",r)
         navigate(comingfrom,{replace:true})
        })    
     }
   }

    return (
        <FormWrapper>
        <form onSubmit={handleSubmit}>
            <div>
                <label>user Email</label>
                <input type="email" value={email} 
                onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div>
                <label>user Password</label>
                <input type="password" value={password} 
                onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type='submit'>Login</button>
        </form>
        </FormWrapper>
    );
}

export default Login;

const FormWrapper =styled.div`
display:flex;
color:red;
margin:auto;

div{
    border: 1px solid black;
    margin-top:12px;

}
`