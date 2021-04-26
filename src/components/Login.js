import React, { useState } from 'react'

export default function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({username: "", phoneNumber: "", password: ""});

    const submitHandler = evt => {
        evt.preventDefault();
        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className= "form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className= "error">{error}</div>) : ""}
                <div className= "form-group">
                    <label>Username: </label>
                    <input
                        type= "text"
                        name= "username"
                        placeholder= "Enter a username..."
                        onChange= {evt => 
                            setDetails({...details, username: evt.target.value})} 
                            value= {details.username}/>
                </div>
                <div className= "form-group">
                    <label>Phone number: </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder= "Enter a phone number..."
                         onChange= {evt => 
                            setDetails({...details, phoneNumber: evt.target.value})} 
                            value= {details.phoneNumber}/>
                </div>
                <div className= "form-group">
                    <label>Password: </label>
                    <input  
                        type= "password"
                        name= "password"
                        placeholder= "Enter a password..."
                        onChange= {evt => 
                            setDetails({...details, password: evt.target.value})} 
                            value= {details.password}/>
                </div>
                <input
                    type="submit"
                    value= "Submit"/>
            </div>
        </form>
    )
}