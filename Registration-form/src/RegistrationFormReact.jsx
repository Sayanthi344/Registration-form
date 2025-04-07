import "./index.css";
import { useState } from "react";

export const RegistrationFormReact =() => {
    const[user,setUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phoneNumber:""
    }); 


    const handelInputchange= (e) =>{
        const {name,value}=e.target;
        setUser((prev)=>({...prev,[name]:value}));
        console.log(user);
    }
 
    const handelFromSubmit = (event) =>{
        event.preventDefault();
        console.log(user);
       
    }

    return (
        <>
        <form onSubmit={handelFromSubmit}>
            <div className="container">
                <h1>Sing up</h1>
                <p>Fill in this form to create an account</p>

                <label htmlFor="firstName"><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" name="firstName" required value={user.firstName}onChange={handelInputchange}/>

                <label htmlFor="lastName"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" name="lastName" required value={user.lastName}onChange={handelInputchange}/>

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required value={user.email}onChange={handelInputchange}/>

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required value={user.password}onChange={handelInputchange}/>

                <label htmlFor="phoneNumber"><b>Phone Number</b></label>
                <input type="text" placeholder="Enter Phone Number" name="phoneNumber" required value={user.phoneNumber}onChange={handelInputchange}/>

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <div className="clearfix">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <button type="submit" className="signupbtn">Sign Up</button>
            </div>
            </div>
        </form>
        </>
    )

}