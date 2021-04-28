import React, {useState } from "react";
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Link } from 'react-router-dom';
import EditUser from './components/EditUser';
import CreatePlant from "./components/CreatePlant";
import Home from "./components/Home";
import styled from 'styled-components';

const App = () => {
 
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

  return (
    <div className="App">
   <StyledHeader>
       <StyledLogo>
       <img src='./components/images/kelly-sikkema-SaJzwm0xR9c-unsplash.jpg'/>
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

      {/* {(user.phoneNumber != "") ? (
        <div className= "welcome">
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick= {Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )} */}
        <div>
          <Home/>
          {/* <EditUser/> */}
       </div>

      {/* <div>
          <SignUp />
       </div>
       <CreatePlant/> */}
      </div>

  );
};
export default App;








  