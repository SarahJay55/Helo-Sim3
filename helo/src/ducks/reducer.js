import axios from 'axios';

const initialState = {
    user: {},
    // recommended: []
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_RECOMMENDED = 'GET_RECOMMENDED';
const ADD_RECOMMENDED = "ADD_RECOMMENDED";


export function getUserInfo(){
    const userData = axios.get('/auth/me')
    .then ( res => {
        return res.data
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}
// export function getRecommended( user, filter ) {
//     const promise = axios.post('/api/recommended', { user, filter } ).then( response => response.data );
  
//     return {
//       type: GET_RECOMMENDED,
//       payload: recommended
//     };
//   }
  
//   export function addRecommended( user, filter ) {
//     const promise = axios.post( '/api/recommended/add', { user, filter } ).then( response => response.data );
  
//     return { 
//       type: ADD_RECOMMENDED,
//       payload: recommended
//     };
// }

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER_INFO + '_FULFILLED':
        return Object.assign( {}, state, { user: action.payload } )
        case GET_RECOMMENDED + '_FULFILLED':
        return Object.assign( {}, state, { recommended: action.payload });
        case ADD_RECOMMENDED + '_FULFILLED':
        return Object.assign( {}, state, { recommended: action.payload });
        default: 
        return state;
    }
}