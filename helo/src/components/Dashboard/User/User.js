import React from "react";
import { Link } from "react-router-dom";

import './User.css';

export default function User( { logout, history, user } ) {
  console.log( user );
  return (
    <div className="container">
      <div className="left">
        <img className="image" src={ user ? user.picture : '#' } alt="user" />
      </div>

      <div className="right">
        <span className="first_name open-sans-bold">{ user ? user.first : null }</span>
        <span className="last_name open-sans-bold">{ user ? user.last : null }</span>
        <Link to="/profile">
          <button className="btn_edit grey-btn open-sans">Edit Profile</button>
        </Link>
      </div>
    </div>
  )
}