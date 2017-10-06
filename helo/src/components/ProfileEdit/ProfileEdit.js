import React, { Component } from 'react';
import './ProfileEdit.css';
import axios from 'axios';
import { connect } from 'react-redux'

class ProfileEdit extends Component {

    render() {
        return (
            <div>
           
            </div> 
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps, {} )(ProfileEdit);