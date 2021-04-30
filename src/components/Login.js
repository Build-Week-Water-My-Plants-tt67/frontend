import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userLoginSuccess, userLoginFailure, userLoginStart } from '../store/actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const StyledLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 2% 0;

  input {
    margin: 1rem 0;
    margin-left: 0.5rem;
  }


  button{
    background-color: #ddd;
    color: #333;
    font-family: sans-serif;
    font-size: .8rem;
    padding: 1% 2%;
    border-radius: 10px;
    font-weight: bold;
    margin: 2%;

        &:hover {
        background-color: rgba(104, 104, 104, 0.8);
        color: white;
        transition: all 1s ease-in-out;
        }
 
  }
`


const LoginForm = (props) => {

    const { push } = useHistory();
    const [details, setDetails] = useState({username: "", password: ""});
    const { userLoginSuccess, userLoginFailure, isCallingAPI, error } = props;

    const submitHandler = evt => {
        evt.preventDefault();
        userLoginStart();
        axiosWithAuth()
          .post("/users/login", details)
          .then( res => {
            localStorage.setItem('token', JSON.stringify(res.data.access_token));
            userLoginSuccess(res.data.user);
            push(`/user/${res.data.user.user_id}/plants`);
          })
          .catch( err => {
            console.log(err);
            userLoginFailure(err);
          })
        
    }

    return (
      <div className="login">
        { (isCallingAPI) ? (<h2>Please wait, checking credentials</h2>): 
            (
            <form onSubmit={submitHandler}>
                <StyledLogin>
                   <h2>Welcome Back!</h2>
                    {(error !== "") ? (<div className= "error">{error}</div>) : ""}
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
                        <label>Password: </label>
                        <input  
                            type= "password"
                            name= "password"
                            placeholder= "Enter a password..."
                            onChange= {evt => 
                                setDetails({...details, password: evt.target.value})} 
                                value= {details.password}/>
                    </div>
                    <button id="submit" type="submit">Login</button>
                </StyledLogin>
            </form>
            )}
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    isCallingAPI: state.user.isCallingAPI,
    error: state.user.error,
  }
}

export default connect(mapStateToProps, { userLoginSuccess, userLoginFailure, userLoginStart })(LoginForm);