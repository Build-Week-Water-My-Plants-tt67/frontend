import React, {useState, useEffect} from 'react';
import schema from './schema/plantFormSchema';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addPlant } from '../store/actions';
import styled from 'styled-components';

const StyledCreatePlant = styled.div`
  padding: 2% 2%;

  `

const initialFormValues = {
    nickname: "",
    species: "",
    h20Frequency: "",
    image: "",
};

const initialFormErrors = {
  nickname: "",
  species: "",
  h20Frequency: "",
  
};

const initialDisabled = true;

const CreatePlant = (props) => {

  const { error, user_id, addPlant } = props;
  const push = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors); 
  const [disabled, setDisabled] = useState(initialDisabled); 

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
    const newPlant = {
      nickname: formValues.nickname.trim(),
      species: formValues.species.trim(),
      h20Frequency: formValues.h20Frequency.trim(),
      image: formValues.image.trim(),
    };
    addPlant(`/plants/${user_id}`, newPlant);
    if ( error === '') {
      push(`/user/${user_id}/plants`);
    }
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
    evt.preventDefault();
    formSubmit();
  }

  return (
    <>

      <StyledCreatePlant>
          <div>
            <h1> Create A New Plant</h1>

          <form onSubmit={onSubmit} id="create-form">
              <div className="errors">
                  <em>
                <div>{formErrors.nickname}</div>
                <div>{formErrors.species}</div>
                <div>{formErrors.h20Frequency}</div>
                </em>
              </div>
          <div>
              <label><h4>Nickname: </h4>
                <input
                  type="text"
                  value={formValues.nickname}
                  onChange={onChange}
                  name="nickname"
                  id="nickname-input"
                  placeholder="Nickname"
                  maxLength="30"
                />
              </label>

              <label><h4>Species: </h4>
                <input
                  type="text"
                  value={formValues.species}
                  onChange={onChange}
                  name="species"
                  id="species-input"
                  placeholder="Species"
                  maxLength="30"
                />
              </label>

            <label><h4>Watering Frequency: </h4>
                <select value={formValues.h20Frequency} name="h20Frequency" onChange={onChange} id="frequency-dropdown">
                  <option value="">-- Select --</option>
                  <option value="daily">Daily</option>
                  <option value="twicePerWeek">Twice Per Week</option>
                  <option value="weekly">Weekly</option>
                </select>
              </label>
              <div>
              <label htmlFor="image"><h4>Select Image: </h4>
                <input
                    type="text"
                    value={formValues.image}
                    onChange={onChange}
                    name="image"
                    id="image-input"
                    placeholder="Image Location"
                  />
                </label>
              </div>
              <div id="submit">
                <button id="submit" disabled={disabled}>Create A Plant</button>
              </div>
          </div>
          </form>
        </div>
        
      </StyledCreatePlant>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user_id: state.user.user.user_id,
    isCallingAPI: state.plants.isCallingAPI,
    error: state.plants.error
  }
}

export default connect(mapStateToProps, { addPlant })(CreatePlant);