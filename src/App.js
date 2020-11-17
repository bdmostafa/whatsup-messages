import './App.css';
import Chat from './components/Chat/Chat';
import Info from './components/Info/Info';
import LeftSidebarIcon from './components/LeftSidebarIcon/LeftSidebarIcon';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/LogIn/Login';
import SignIn from "./components/SignIn/SignIn";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext()

function App() {

  const [loggedInUser,setLoggedInUser] = useState(false);

  return (
    <div className="App">
      <div className="app__body">
      <UserContext.Provider value={[loggedInUser,setLoggedInUser ] }>
      <Router>
     <Switch>
       <Route exact path="/">
         <Login/>
       </Route>
      <Route path="/signIn">
        <SignIn/>
      </Route>
      <PrivateRoute path="/chat">
      <LeftSidebarIcon />
        <Sidebar />
        <Chat />
        <Info />
      </PrivateRoute>
     </Switch>
   </Router>
   </UserContext.Provider>
      </div>
      
    </div>
  );
}

export default App;
