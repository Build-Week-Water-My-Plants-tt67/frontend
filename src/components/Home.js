import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <div className="home-container">
      <h1>Welcome to Water My Plants!</h1>
      <br/>
      <h3>If you are looking for help automating a watering schedule for all of the important foliage in your life, you've come to the right place!</h3>
      <br/>
      <h3>Our app is compatible with multiple Smart Home managers, including Alexa, Apple HomeKit, Google Assistant, and ITTT. Click below to sign up, or if you are a returning user, login.</h3>
      <br/>
      <div className="home-buttons">
        <Link to={`/signup`}>
          <button className="sign-up-btn">Sign Up!</button>
        </Link>
        <Link to={`/login`}>
          <button className="login-btn">Login</button>
        </Link>
      </div>

    </div>
  )
}

export default Home;
