import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from '../store/actions';

const Header = (props) => {
  
  const { user_id, userLogout } = props;

  return (
    <header>
      
        { (localStorage.getItem('token')) ? 
          (
            <ul>
              <li><NavLink to = {`${user_id}/dashboard`}>My Dashboard</NavLink></li>
              <li><NavLink to = {`${user_id}/addplant`}>Add Plant</NavLink></li>
              <li><NavLink to = {`${user_id}/edituser`}>Edit Profile</NavLink></li>
              <li ><NavLink onClick={userLogout} to = '/home'>Logout</NavLink></li>
            </ul>
          ) : 
          (
            <ul>
              <li><NavLink to = '/home'>Home</NavLink></li>
              <li><NavLink to = '/signup'>Sign Up</NavLink></li>
              <li><NavLink to = '/login'>Login</NavLink></li>
            </ul>
          )
          }
      
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    user_id: state.user.user.user_id
  }
}

export default connect(mapStateToProps, { userLogout })(Header);