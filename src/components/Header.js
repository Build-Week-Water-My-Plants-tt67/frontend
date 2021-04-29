import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from '../store/actions';
import styled from 'styled-components';
import plant_img from './images/plant_img.jpg'
import Login from './Login';

const Header = (props) => {
  
   
  const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #1f441e;

  nav{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  a{
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  }
`
const StyledLogo = styled.div`
  
  img{
    width: 20%;
  }
`
const StyledLink = styled.div`

      display: flex;
      justify-content: left;
      width: 30%;
      border-radius: 2%;
      margin-bottom: 0.5%;
      padding: 0.2%;

    label{
      color: white;
    }

    
`
  const { user_id, userLogout } = props;

  return (
    <header>
      
        { (localStorage.getItem('token')) ? 
          (
            <ul>
              <li><NavLink to = {`/plant`}>My Dashboard</NavLink></li>
              <li><NavLink to = {`/plant/create`}>Add Plant</NavLink></li>
              <li><NavLink to = {`/user/edit`}>Edit Profile</NavLink></li>
              <li ><NavLink onClick={userLogout} to = '/'>Logout</NavLink></li>
            </ul>
          ) : 
          (
      <StyledHeader>
       <StyledLogo>
        <img src={plant_img} alt="green plant"/>
       </StyledLogo>
       <nav>
         <Link to={'/'}>Home</Link>
         <Link>Gallery</Link>
         <Link>Contact</Link>
       </nav>
       <StyledLink>
        <Link to={`/login`}>
          <Login/>
        </Link>
        </StyledLink>
      </StyledHeader>
            // <ul>
            //   {/* <li><NavLink to = '/home'>Home</NavLink></li> */}
            //   <li><NavLink to = '/signup'>Sign Up</NavLink></li>
            //   <li><NavLink to = '/login'>Login</NavLink></li>
            // </ul>
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