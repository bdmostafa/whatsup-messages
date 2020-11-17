import React, { useContext, useState } from 'react';
import logo from '../../image/logo.png';
import './Login.css'
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebaseConfig';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig)

const Login = () => {

  const [user,setUser] =useState({
    isSignIn:false,
    name:'',
    password:'',
    email:'',
     error:'',
    success:false
  });
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogle = () => {
    firebase.auth().signInWithPopup(provider)
    .then(res=>{
      const {displayName,email,photoURL} = res.user
      const signInUser ={
        isSignIn:true,
        name:displayName,
        email:email,
        photoURL:photoURL,
     
      }
      setUser(signInUser)
      setLoggedInUser(signInUser)
    
      history.replace(from);
      console.log(displayName,email,photoURL)
    })
    .catch(error=>{
    console.log(error);
    console.log(error.massage)
    })
  }
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>{
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then(res=>{
        data.error = '';
        data.success=true
       setUser(data)
       setLoggedInUser(data)
       history.replace(from);
       console.log(data,res);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        data.error = error.message;
        setUser(data)
        console.log(errorCode,errorMessage);
        // ...
      });
    }

    
    return (
        <div className="container">
            <div className="text-center loginPart">
            <img src={logo} alt=""/>
            <h2 className="py-2">Login</h2>
            <div className="box-text mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
           
            <input
        name="email"
        id="input"
        placeholder="Enter Your Email"
        ref={register({
          required: "Email",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email"
          }
        })}
      />
      {errors.email && errors.email.message}

        <br/><br/>
      <input name="password" type="password" id="input" placeholder="Password" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span> password</span>}
      <br/> <br/>
      <input className="Btn" type="submit" value="Login"/>
    </form>
    <Link to='/signIn' style={{color:'red', paddingTop:"5px"}}>Create a new account</Link>
            </div><br/>
            <p style={{color:"red",paddingTop:"20px"}}>{user.error}</p> <br/>
            <button onClick={handleGoogle}> Continue with Google</button>
          { loggedInUser.email&&<Link to="/chat"> <button className="bg-primary text-white">Go TO The Chat</button></Link>}
           
          
            </div>
        </div>
    );
};

export default Login;