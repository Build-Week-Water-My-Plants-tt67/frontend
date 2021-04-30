import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPlants } from '../store/actions';
import styled from 'styled-components'

const StyledPlant = styled.div`

  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;

.plant-card {
  border-radius: 5px;
  background: #fff;
  width: 333px;
  margin: 30px;
  text-align: center;
}
.plant-list-image {
  object-fit: contain;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  max-width: 333px;
}

`
const UserDashboard = (props) => {
  const { plants, isCallingAPI, error, user, getPlants } = props;
  const { push } = useHistory();
  
  console.log(user);
  useEffect(()=>{
    getPlants(`https://water-my-plants-tt67.herokuapp.com/api/users/1/plants`);
  }, []);

  const handleClick = (ev, plant) => {
    ev.preventDefault();
    push(`plant/${plant.plant_id}`);
  }

  return (
    <div className='dashboard'>
      { (isCallingAPI) ? (<h3>Loading Dashboard</h3>) :
        <h2>Welcome to your Plant Watering Dashboard, {user.username}</h2>
      }
      { (plants.length === 0) ? (<h3>Click below to add your first plant!</h3>) :
        <h3>Your Plants</h3>
      } 
      <div><StyledPlant>
        {plants.map(plant => (
          <div
            onClick={ev => handleClick(ev, plant)}
            className="plant-card"
            key={plant.plant_id}
          >
            <img
              className="plant-list-image"
              src={plant.image}
              alt={plant.nickname}
            />
            <p>{plant.nickname}</p>
            <p>{plant.species}</p>
          </div>
        ))}
        </StyledPlant>
      </div>
    </div>
);

}

const mapStateToProps = (state) => {
  return {
    plants: state.plants.plants,
    isCallingAPI: state.plants.isCallingAPI,
    error: state.plants.error,
    user: state.user.user
  }
}

export default connect(mapStateToProps, { getPlants })(UserDashboard);