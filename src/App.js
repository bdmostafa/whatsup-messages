import React, { useState, createContext } from "react";
import "./App.css";

import axios from './axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";
import NoMatch from "./components/NoMatch/NoMatch";
import SignIn from "./components/Login/SignIn";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  

  return (
    <div className="App">
      <div className="app__body">

      <UserContext.Provider value={{
      loggedInUser,
      setLoggedInUser
    }}>
      <Router>
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>




       
      </div>
    </div>
  );
}

export default App;
