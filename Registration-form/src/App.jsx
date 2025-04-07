import "./index.css"
import { useState } from "react";

export const RegistrationForm =() => {
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[phoneNumber,setPhoneNumber]=useState('');

    const handelInputchange= (e) =>{
        const {name,value}=e.target;

        switch(name) {
            case"firstName":
                setFirstName(value);
                break;

            case"lastName":
                setLastName(value);
                break;

            case"email":
                setEmail(value);
                break;

            case"password":
                setPassword(value);
                break;

            case"phoneNumber":
                setPhoneNumber(value);
                break;
        };
    }

    const handelFromSubmit = (event) =>{
        e.preventDefault();
        const fromData={firstName,lastName,email,password,phoneNumber};
        console.log(fromData);
    }

    return (
        <>
        <form>
            <div className="container">
                <h1>Sing up</h1>
                <p>Fill in this form to create an account</p>

                <label htmlFor="firstName"><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" name="firstName" required value={firstName}onChange={handelInputchange}/>

                <label htmlFor="lastName"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" name="lastName" required value={lastName}onChange={handelInputchange}/>

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required value={email}onChange={handelInputchange}/>

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required value={password}onChange={handelInputchange}/>

                <label htmlFor="phoneNumber"><b>Phone Number</b></label>
                <input type="text" placeholder="Enter Phone Number" name="phoneNumber" required value={phoneNumber}onChange={handelInputchange}/>

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