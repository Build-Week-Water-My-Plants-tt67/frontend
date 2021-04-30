import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePlant, setCurrentPlant } from '../store/actions';
import styled from 'styled-components'

const StyledPlant = styled.div`

  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  width: 1600px;
  margin: 0 auto;

 .img-wrapper {
  border-radius: 5px;
  background: #fff;
  width: 10px;
  margin: 30px;
  text-align: center;
}
img {
  object-fit: contain;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  max-width: 333px;
}
`

const Plant = (props) => {

  const { user_id, plant, setCurrentPlant, isCallingAPI, error, deletePlant } = props;
  const { plant_id } = useParams();
  const { push } = useHistory();

  useEffect(()=>{
    setCurrentPlant(`/plants/${plant_id}`);
  }, []);

  console.log(plant);

  const handleEdit = (e) => {
    e.preventDefault();
    push(`/user/${user_id}/plant/${plant_id}/edit`);
  }
  
  const handleDelete = (e) => {
    e.preventDefault();
    deletePlant(`/plants/${plant_id}`);
    push(`/${user_id}/dashboard`);
  }


  return(
    <div className="plant">				
        <h3 className="plant-title">{plant.nickname} Details:</h3>
        <StyledPlant>
        <div className="plant-container">

          <section className="plant-details">
            <div className="image-wrapper">
              <img src={plant.image} alt={plant.nickname} />
            </div>
              <p>Species: <strong>{plant.species}</strong></p>
              <p>Watering Frequency: <strong>{plant.h20frequency}</strong></p>
          </section>
          
          <section>
            <button onClick={handleEdit}>
              Edit Plant
            </button>
            <button onClick={handleDelete}>
              Delete Plant
            </button>
          </section>

        </div>
        </StyledPlant>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user_id: state.user.user.user_id,
    plant: state.plants.currentPlant,
    isCallingAPI: state.plants.isCallingAPI,
    error: state.plants.error
  }
}

export default connect(mapStateToProps, { setCurrentPlant, deletePlant })(Plant);
