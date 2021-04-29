import React, {useState } from "react";
import { Link } from 'react-router-dom';
import EditUser from './components/EditUser';
import CreatePlant from "./components/CreatePlant";
import Home from "./components/Home";

import Header from "./components/Header";

const App = () => {
 


    


  return (
    <div className="App">
      <Header/>
   

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








  