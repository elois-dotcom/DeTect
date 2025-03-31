import React from "react";
import './button.css'

function AddUser(){
   return(
    <div>
       
        <form action="/dashboard" method="">
        <h1>Register here </h1>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id=""/>
            <label htmlFor="password">Password</label>
           
            <input type="password" name="password" id="" />
            <button type="submit">Submit</button>
        </form>
    </div>
   )
    

}
export default AddUser;