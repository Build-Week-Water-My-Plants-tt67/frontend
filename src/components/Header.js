import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from '../store/actions';
import styled from 'styled-components';

const Header = (props) => {
  
  const StyledHeader = styled.header`
    width: 100%;
    margin-bottom: 0;
    background-color: #1f441e;

    ul {
      padding: 1rem 0;
      list-style-type: none;
      display: flex;
      justify-content: space-evenly;
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
  
  img{
    width: 20%;
  }
`

  const { user_id, userLogout } = props;

  return (
      <StyledHeader>
        { (localStorage.getItem('token')) ? 
          (
            <ul>
              <li>
                <StyledLogo>
                  <img 
                    src='%components/images%kelly-sikkema-SaJzwm0xR9c-unsplash.jpg'
                    alt="logo"
                  />
                </StyledLogo>
              </li>
              <li><NavLink to = {`/user/plants`}>My Dashboard</NavLink></li>
              <li><NavLink to = {`/plant/create`}>Add Plant</NavLink></li>
              <li><NavLink to = {`/user/edit`}>Edit Profile</NavLink></li>
              <li ><NavLink onClick={userLogout} to = '/'>Logout</NavLink></li>
            </ul>
          ) : 
          (
            <ul>
              <li>
                <StyledLogo>
                  <img 
                    src='%components/images%kelly-sikkema-SaJzwm0xR9c-unsplash.jpg'
                    alt="logo"
                  />
                </StyledLogo>
              </li>
              <li><NavLink to = '/home'>Home</NavLink></li>
              <li><NavLink to = '/signup'>Sign Up</NavLink></li>
              <li><NavLink to = '/login'>Login</NavLink></li>
            </ul>
          )
          }
      </StyledHeader>
  )
}

const mapStateToProps = (state) => {
  return {
    user_id: state.user.user.user_id
  }
}

export default connect(mapStateToProps, { userLogout })(Header);