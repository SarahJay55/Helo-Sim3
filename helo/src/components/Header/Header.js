import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

export default function Header({ page }) {
  
  return (
    <div className="head_parent_container orange-gradient">
      <div className="head_child_container">
        <div className="head_child_left">
          <span className="head_title open-sans-bold">Helo</span>

          <Link to="/">
            <img className="home_img" src='https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/home.png' alt="home" />
          </Link>
          
          <Link to="/search">
            <img className="search_img" src='https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/search.png' alt="search" />
          </Link>
        </div>

        <div className="head_child_mid">
          <span className="head_page open-sans">{ page }</span>
        </div>

        <div className="head_child_right">
        <a href='http://localhost:3005/auth/logout'><span className="head_logout open-sans">Logout</span></a>
        </div>
      </div>
    </div>
  )
}

