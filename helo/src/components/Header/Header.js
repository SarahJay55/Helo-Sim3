import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import { logOut } from '../../ducks/reducer'

import home_icon from '../../assets/home.png';
import search_icon from '../../assets/search.png';

export default function Header({ page, logout }) {
  
  return (
    <div className="parent_container orange-gradient">
      <div className="child_container">
        <div className="child_left">
          <span className="title open-sans-bold">Helo</span>

          <Link to="/">
            <img className="home_img" src={ home_icon } alt="home" />
          </Link>
          
          <Link to="/search/1">
            <img className="search_img" src={ search_icon } alt="search" />
          </Link>
        </div>

        <div className="child_mid">
          <span className="page open-sans">{ page }</span>
        </div>

        <div className="child_right">
          <span onClick={ () => console.log("you're logged out...")} className="logout open-sans">Logout</span>
        </div>
      </div>
    </div>
  )
}

