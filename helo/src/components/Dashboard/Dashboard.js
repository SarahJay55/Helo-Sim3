import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { getUserInfo } from './../../ducks/reducer';
import { connect } from 'react-redux'
import User from './User/User';
import Header from '../Header/Header';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            filter: 'first'
        }
    }

    componentDidMount(){
        this.props.getUserInfo();
    }

    // updateFilter( filter ) {
    //     this.setState({ filter });
    //     const { user, getRecommended } = this.props;
    
    //     getRecommended( user, filter );
    //   }

    render() {
        const { user } = this.props;
        const { filter } = this.state; 
    
        return (
          <div>
            <Header page="Dashboard" />
            <div className="parent_container">
              <div className="child_container">
                <div className="child_top">
                  <User />
    
                  <div className="onboarding content-container">
                    <span className="open-sans">Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</span>
                  </div>
                </div>
    
                <div className="recommended_parent">
                  <div className="recommended_child content-container">
                    <div className="recommended_header">
                      <span className="recommended_header_span open-sans"> Recommended Friends </span>
                      <span className="recommended_select_span open-sans"> Sorted by </span>
                      <select className="recommended_select open-sans" >
                        <option value="first"> First Name </option>
                        <option value="last"> Last Name </option>
                        <option value="gender"> Gender </option>
                        <option value="hobby"> Hobby </option>
                        <option value="h_color"> Hair Color </option>
                        <option value="e_color"> Eye Color </option>
                        <option value="birthday"> Birthday </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
    
    export default connect( state => state, { getUserInfo } )( Dashboard );