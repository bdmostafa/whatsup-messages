import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import './Login.css'

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

const SignIn = () => {

      const [user,setUser] =useState({
    isSignIn:false,
    name:'',
    password:'',
    email:'',
    error:'',
    success:false
  });
const {loggedInUser,setLoggedInUser} = useContext(UserContext)
    const { register, handleSubmit,  errors } = useForm();

    const onSubmit = data =>{
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then(res=>{
        data.error = '';
        data.success=true
        
        updateUserName(user.displayName)
        setLoggedInUser(data)
        console.log(res,data);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        data.error = error.message;
        setUser(data)
        console.log(data);
        // ...
      });
    }
    
     // userName
     const updateUserName = name => {
      var user = firebase.auth().currentUser;
  
      user.updateProfile({
        displayName: name,
       
      }).then(function() {
        console.log('user name sent successfully')
      }).catch(function(error) {
        console.log(error)
      });
  }

 
    return (
        
             <div className="container">
            <div className="text-center signInPart">
            <img src="https://raw.githubusercontent.com/bdmostafa/whatsup-messages/loginPageDev/src/image/logo.png?token=AO2C7MLSABM6TBNDKWGHYEC7WPS62" alt=""/>
            <h2 className="py-2">Login</h2>
            <div className="box mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="name" id="input" placeholder="Enter your name" ref={register({ required: true, maxLength: 20 })} /><br/><br/>
            <input
        name="email"
        id="input"
        placeholder="Enter Your Email"
        ref={register({
          required: "invalid email",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email"
          }
        })}
      />
      {errors.email && errors.email.message}

        <br/><br/>
      <input name="password" type="password" id="input" placeholder="Password" ref={register({  required: "You must specify a password",
          minLength: {
            value: 6,
            message: " 6 characters"
          }
      })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span> 6 characters</span>}
      <br/>  <br/>
      <input className="Btn" type="submit" value="SignIn"/>
    </form>
    <p style={{color:'red', paddingTop:"5px"}}>Already Have an Account?<Link to="/">Login</Link></p>
            </div>
            <p style={{color:"red",paddingTop:"20px"}}>{user.error}</p>
            {user.success &&  <p style={{color:"green"}}>User Created successfully</p> }
            </div>
           
        </div>
        
    );
};

export default SignIn;