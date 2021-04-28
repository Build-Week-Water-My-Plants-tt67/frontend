import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userLogin } from '../store/actions';
import styled from 'styled-components';

const StyledLogin = styled.div`
  width: 50%;
  display: flex;
  justify-content: left;
  color: white;


  button{
    background-color: #ddd;
    color: #333;
    font-family: sans-serif;
    font-size: .8rem;
    padding: 3% 7%;
    border-radius: 10px;
    font-weight: bold;

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
    const { userLogin, isCallingAPI, error } = props;

    const submitHandler = evt => {
        evt.preventDefault();
        userLogin("https://water-my-plants-tt67.herokuapp.com/api/users/login", details);
        push("/user/plants");
    }

    return (
      <div className="login">
        { (isCallingAPI) ? (<h2>Please wait, checking credentials</h2>): 
            (
            <form onSubmit={submitHandler}>
                <StyledLogin>
                   
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

export default connect(mapStateToProps, { userLogin })(LoginForm);