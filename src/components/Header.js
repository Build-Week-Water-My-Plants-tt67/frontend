import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from '../store/actions';
import styled from 'styled-components';

import plant_img from './images/plant_img.jpg'
import Login from './Login';


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

  const { user_id, userLogout, isLoggedIn } = props;
  const { push } = useHistory();
  const logoutHandler = evt => {
    evt.preventDefault();
    userLogout();
    push('/');
  }

  return (
      <StyledHeader>


          <ul>
              <li>
                <StyledLogo>
                  <img 
                    src='%components/images%kelly-sikkema-SaJzwm0xR9c-unsplash.jpg'
                    alt="logo"
                  />
                </StyledLogo>
              </li>
              <li><NavLink to = '/'>Home</NavLink></li>
              <li><NavLink to = '/signup'>Sign Up</NavLink></li>
              <li><NavLink to = '/login'>Login</NavLink></li>
            </ul>

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