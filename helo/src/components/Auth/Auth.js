import React, { Component } from 'react';
// import logo from '../../assets/logo.png';
import './Auth.css';

export default class Auth extends Component {
    render() {
        return (
            <div className='app'>
                <div className="border">
                    <div>
                        <img src='https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/logo.png' alt="" />
                        <h1>Helo</h1>
                    </div>
                    <div>
                        <a href={process.env.REACT_APP_LOGIN}><button className="button">Login / Register</button></a>
                    </div>
                </div>
            </div>
        )
    }
}