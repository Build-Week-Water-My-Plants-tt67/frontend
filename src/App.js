import React, {useState } from "react";
import SignUp from './components/SignUp';
import LoginForm from './components/Login';
import UserDashboard from './components/UserDashboard';
import Plant from './components/Plant';
import EditUser from './components/EditUser';
import CreatePlant from "./components/CreatePlant";
import EditPlant from "./components/EditPlant";
import Header from "./components/Header";
import { Redirect, Route, Switch } from "react-router";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
 
  return (
    <div className="App">
      
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/login'/>
          </Route>
          <PrivateRoute exact path="/plant" component={Plant} />
          <PrivateRoute exact path="/user/plants" component={UserDashboard} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute exact path="/user/edit" component={EditUser}/>
          <PrivateRoute exact path="/plant/create" component={CreatePlant}/>
          <PrivateRoute exact path="/plant/edit" component={EditPlant}/>
        </Switch>
      </div>

  );
};
export default App;








  