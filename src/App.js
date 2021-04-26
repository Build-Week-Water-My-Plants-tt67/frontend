
import './App.css';
import React, { useState } from 'react'
import LoginForm from './components/Login'

function App() {
  const testUser = {
    phoneNumber: "123",
    password: "test"
  }

  const [user, setUser] = useState({username: "", phoneNumber: "", password: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.phoneNumber == testUser.phoneNumber && details.password == testUser.password) {
      console.log("Logged in");
      setUser({
        username: details.username,
        phoneNumber: details.phoneNumber
      });
    } else {
     console.log("Details do not match user");
     setError("Details do not match user");
    }
  }

  const Logout = () => {
    console.log("Logged out");
    setUser({ username: "", phoneNumber: ""});
  }

  return (
    <div className="App">
      {(user.phoneNumber != "") ? (
        <div className= "welcome">
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick= {Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
