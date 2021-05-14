import axios from 'axios';
import { BACKEND_URL } from '../../constraints'
import { useMutation } from 'react-query'
import { addProfileImage } from '../../productapi'

import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAIL,
    LOGOUT
} from './types';


// var fileUrl = 
// 'https://firebasestorage.googleapis.com/b/bucket/o/images%20geeksforgeeks.jpg';
  
// // Create a reference to the file to delete
// var fileRef = storage.refFromURL(fileUrl);
  
// console.log("File in database before delete exists : " 
//         + fileRef.exists())
  
// // Delete the file using the delete() method 
// fileRef.delete().then(function () {
  
//     // File deleted successfully
//     console.log("File Deleted")
// }).catch(function (error) {
//     // Some Error occurred
// });
  
// console.log("File in database after delete exists : "
//         + fileRef.exists())



export const load_user = () => async dispatch => {
  
  const access = (typeof window !== "undefined") ? localStorage.getItem('access') : '';

    if (access) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${access}`,
                'Accept': 'application/json'
            }
        }; 

        try {
            const res = await axios.get(`${BACKEND_URL}/dj-rest-auth/user/`, config);
           
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            });   

        } catch (err) {
            console.log("user load fail " , err)
            dispatch({
                type: USER_LOADED_FAIL
            });
        }
    } else {
        console.log("Access token fail ")
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
};



    
export const googleAuthenticate = (access_token,imageUrl, returnId) => async dispatch =>{
   
        
const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
    };
    
    const body = JSON.stringify({access_token});

        try {
            const res = await axios.post(`${BACKEND_URL}/dj-rest-auth/google/`,body, config);


            dispatch({
                type: GOOGLE_AUTH_SUCCESS,
                payload: res.data
            });
            
            dispatch(load_user());
            returnId(res.data.user.pk, imageUrl)
        } catch (err) {
            console.log("error in google login " + err);

            dispatch({
                type: GOOGLE_AUTH_FAIL
            });
        }
};



export const checkAuthenticated = () => async dispatch => {
    const access = (typeof window !== "undefined") ? localStorage.getItem('access') : '';

    if (access) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }; 

        const body = JSON.stringify({ token: access});

        try {
            const res = await axios.post(`${BACKEND_URL}/dj-rest-auth/token/verify/`, body, config)

            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                });
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }

    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`${BACKEND_URL}/auth/jwt/create/`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(load_user());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err
        })
    }
};

export const signup = (id,profile_image, email, first_name, last_name, password, re_password) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    console.log("image link " + profile_image)
    const body = JSON.stringify({ id, profile_image, email, first_name, last_name, password, re_password });
    

    try {
        const res = await axios.post(`${BACKEND_URL}/auth/users/`, body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        console.log("sign up error " + err)
        dispatch({
            type: SIGNUP_FAIL,
            payload: err
        })
    }
};

export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token });

    try {
        await axios.post(`${BACKEND_URL}/auth/users/activation/`, body, config);

        dispatch({
            type: ACTIVATION_SUCCESS,
        });
    } catch (err) {
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
};

export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email });

    try {
        await axios.post(`${BACKEND_URL}/auth/users/reset_password/`, body, config);

        dispatch({
            type: PASSWORD_RESET_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_FAIL
        });
    }
};

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
        await axios.post(`${BACKEND_URL}/auth/users/reset_password_confirm/`, body, config);

        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL
        });
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};
