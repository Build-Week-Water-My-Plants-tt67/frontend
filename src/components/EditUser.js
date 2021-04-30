import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import schema from './schema/editUserSchema';
import { editUser } from '../store/actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledEditUser = styled.div`
  padding: 2% 2%;

  `

const EditUser = (props) => {

  const { user, editUser } = props;
  const { push } = useHistory();

  const initialFormValues = {
    username: user.username,
    phone: user.phone,
    password: ''
  };
  
  const initialFormErrors = {
    phone: "",
    password: "",
  };
  
  const initialDisabled = true;
  const [ values, setValues ] = useState(initialFormValues);
  const [ errors, setErrors ] = useState(initialFormErrors);
  const [ disabled, setDisabled ] = useState(initialDisabled); 

  const inputChange = (name, value) => {
    yup
      .reach(schema, name) 
      .validate(value) 
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });

    setValues({
      ...values,
      [name]: value, 
    });
  };

  useEffect(() => {
    schema.isValid(values).then((valid) => {
      console.log(valid);
      setDisabled(!valid);
    });
  }, [values]);

  const onChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    editUser(`/users/${user.user_id}`, values);
    push(`/user/${user.user_id}/plants`);
  }

  return (
    <StyledEditUser>
      <form onSubmit={onSubmit} id="Edit-User">
        <div>
          <em>
          <div>{errors.phone}</div>
          <div>{errors.password}</div>
          </em>
        </div>
        <div>
          <h3>{values.username}'s Profile</h3>
          <label><h4>Update Phone Number: </h4>
            <input
              type="number"
              value={values.phone}
              onChange={onChange}
              name="phone"
              id="number-input"
              placeholder="0000000000"
              maxLength="10"
            />
          </label>

          <label><h4>Enter or Update Password: </h4>
            <input
              type="password"
              value={values.password}
              onChange={onChange}
              name="password"
              id="pwd-input"
              placeholder="Password"
              maxLength="30"
            />
          </label>
          <div id="submit-update">
            <button id="submit-update" disabled={disabled}>Submit Update</button>
          </div>
        </div>
      </form>
    </StyledEditUser>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    isCallingAPI: state.user.isCallingAPI,
    error: state.user.error,
  }
}

export default connect(mapStateToProps, { editUser })(EditUser);