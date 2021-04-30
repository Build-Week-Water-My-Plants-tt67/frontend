import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import schema from './schema/signUpFormSchema';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledSignUp = styled.div`
  padding: 2% 2%;

  label{
    margin-bottom: 2%;
  }
  `

const initialFormValues = {
  username: "",
  phone: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  phone: "",
  password: "",
};

const initialSignup = [];
const initialDisabled = true;


export default function Form() {

  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [signUp, setSignUp] = useState(initialSignup);
  const [disabled, setDisabled] = useState(initialDisabled); 

  const { push } = useHistory();

  const postNewSignUp = (newSignUp) => {
    axios
    .post("https://water-my-plants-tt67.herokuapp.com/api/users/register", newSignUp)
      .then((res) => {
        setSignUp([res.data, ...signUp]);
        setFormValues(initialFormValues);
        console.log(res.data);
        push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const inputChange = (name, value) => {
    yup
      .reach(schema, name) 
      .validate(value) 
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  
    setFormValues({
      ...formValues,
      [name]: value, 
    });
  };
  
  const formSubmit = () => {
    const newSignUp = {
      username: formValues.username.trim(),
      phone: formValues.phone.trim(),
      password: formValues.password.trim(),
    };
    postNewSignUp(newSignUp);
  };
    
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);  
  
  const onChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  const onSubmit = evt => {
      evt.preventDefault()
      formSubmit();
  }

  return (
    <>
      <StyledSignUp>
          <div>

          <form onSubmit={onSubmit} id="signup-form">
              <div>
                <em>
                <div>{formErrors.username}</div>
                <div>{formErrors.phone}</div>
                <div>{formErrors.password}</div>
                </em>
              </div>
              <div>
                <h1>Sign Up With Us Today!</h1>
              <label>Username:
                <input
                  type="text"
                  value={formValues.username}
                  onChange={onChange}
                  name="username"
                  id="name-input"
                  placeholder="Username"
                  maxLength="30"
                />
              </label>
                <br/>
                <br/>
              <label>Phone Number:
                <input
                  type="text"
                  value={formValues.phone}
                  onChange={onChange}
                  name="phone"
                  id="number-input"
                  placeholder="Phone Number"
                  maxLength="30"
                />
              </label>
              <br/>
              <br/>
              <label>Password: 
                <input
                  type="password"
                  value={formValues.password}
                  onChange={onChange}
                  name="password"
                  id="pwd-input"
                  placeholder="Password"
                  maxLength="30"
                />
              </label>
              <br/>
              <div id="submit">
                <button id="submit" disabled={disabled}>Sign Up</button>
              </div>
          </div>
          </form>
        </div>
    </StyledSignUp>
  </>
  )
}
