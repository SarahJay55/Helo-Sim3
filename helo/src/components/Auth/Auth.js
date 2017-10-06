import React, { Component } from 'react';
import logo from './../../assets/logo.png';
import './Auth.css';
export default class Auth extends Component {
    render() {
        return (
            <div className='App'>  
                <img src={logo} alt=""/>
                <a href={ process.env.REACT_APP_LOGIN }><button>Login</button></a>
            </div> 
        )
    }
}