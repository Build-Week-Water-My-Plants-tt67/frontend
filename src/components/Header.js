import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from '../store/actions';
import styled from 'styled-components';
import plant_img from './images/plant_img.jpg';


const Header = (props) => {
  
  const StyledHeader = styled.header`
    width: 100%;
    background-color: #1f441e;
    display: flex;

    ul {
      padding: 1rem 0;
      list-style-type: none;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 80%;
    }

    li {
      color: white;
    }

    a {
      color: white;
      text-decoration: none;
    }

  `
const StyledLogo = styled.div`
  width: 20%;
  margin: 1% 1%;

  img{
    width: 20%;
    height: 7vh;
    border-radius: 10px;
  }
`

  const { user_id, userLogout, isLoggedIn } = props;
  const { push } = useHistory();
  const logoutHandler = evt => {
    evt.preventDefault();
    userLogout();
    push('/');
  }

  return (
      <StyledHeader>
         <StyledLogo>
        <img src={plant_img} alt="green plant"/>
       </StyledLogo>

          <ul>
              <li>
              </li>
              <li><NavLink to = '/'>Home</NavLink></li>
              <li><NavLink to = '/signup'>Sign Up</NavLink></li>
              <li><NavLink to = '/login'>Login</NavLink></li>
            </ul>
  
      </StyledHeader>
  )
}

const mapStateToProps = (state) => {
  return {
    user_id: state.user.user.user_id,
    isLoggedIn: state.user.isLoggedIn
  }
}

export default connect(mapStateToProps, { userLogout })(Header);