import React, {useState } from "react";
import { Link } from 'react-router-dom';
import EditUser from './components/EditUser';
import CreatePlant from "./components/CreatePlant";
import Home from "./components/Home";
import styled from 'styled-components';
import SignUp from "./components/SignUp";
import LoginForm from './components/Login';
import UserDashboard from './components/UserDashboard';
import Plant from './components/Plant';
import EditPlant from "./components/EditPlant";
import Header from "./components/Header";
import { Redirect, Route, Switch } from "react-router";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {

  return (
    <div className="App">
      <Header/>
      <main>
        <Switch>
          <PrivateRoute exact path="/user/edit" component={EditUser}/>
          <PrivateRoute exact path="/plant/create" component={CreatePlant}/>
          <PrivateRoute exact path="/plant/edit" component={EditPlant}/>
          <PrivateRoute exact path="/plant" component={Plant} />
          <PrivateRoute exact path="/user/plants" component={UserDashboard} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUp} />
          <Route path='/' component = { Home }/>
        </Switch>
      </main>
      <Header/>

        
          {/* <Route exact path='/'>
            <Redirect to='/login'/>
          </Route> */}
          
          
          
        
      </div>

  );
};
export default App;








  