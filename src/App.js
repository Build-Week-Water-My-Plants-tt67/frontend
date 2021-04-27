import React, {useState, useEffect} from "react";
import SignUp from './components/SignUp';
import LoginForm from './components/Login';
import schema from './formSchema';
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
  username: "",
  phoneNumber: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  phoneNumber: "",
  password: "",
};
const initialSignup = [];
const initialDisabled = true;

const App = () => {

    const [signUp, setSignUp] = useState(initialSignup);
    const [formValues, setFormValues] = useState(initialFormValues); 
    const [formErrors, setFormErrors] = useState(initialFormErrors); 
    const [disabled, setDisabled] = useState(initialDisabled); 
    const [user, setUser] = useState({username: "", phoneNumber: "", password: ""});
    const [error, setError] = useState("");

    const testUser = {
    phoneNumber: "123",
    password: "test"
    }
    
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
      
    
      const postNewSignUp = (newSignUp) => {
          axios
            .post("https://reqres.in/api/orders", newSignUp)
            .then((res) => {
              setSignUp([res.data, ...signUp]);
              setFormValues(initialFormValues);
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        };
      
      const inputChange = (name, value) => {
          yup
            .reach(schema, name) 
            .validate(value) 
            .then(() => {
              setFormErrors({
                ...formErrors,
                [name]: "",
              });
            })
            .catch((err) => {
              setFormErrors({
                ...formErrors,
                [name]: err.errors[0],
              });
            });
      
          setFormValues({
            ...formValues,
            [name]: value, 
          });
        };
      
      const formSubmit = () => {
          const newSignUp = {
            username: formValues.username.trim(),
            phoneNumber: formValues.phoneNumber.trim(),
            password: formValues.password.trim(),
          };
          postNewSignUp(newSignUp);
        };
          
            useEffect(() => {
              schema.isValid(formValues).then((valid) => {
                setDisabled(!valid);
              });
            }, [formValues]);

     
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
        <div>
          <SignUp 
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors}
              />
       </div>
    </div>

  );
};
export default App;








  