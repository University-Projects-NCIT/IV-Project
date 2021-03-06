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
} from '../actions/types';
import { useMutation } from 'react-query'
import { addProfileImage } from '../../apis/productapi'




const initialState = {
  access: (typeof window === "undefined"? null: localStorage.getItem('access')),
  refresh: (typeof window  === "undefined"? null:localStorage.getItem('refresh')),
  isAuthenticated: null,
  error:null,
  user: null
}

 const AuthReducer = (state = initialState, action) => 
{
   const { type, payload } = action
   
//   const mutation = useMutation(addProfileImage, {
//         onSuccess: () => console.log("success login"),
//         onError: (err) => console.log("fail to upload image " , err)
//  })
         // mutation.mutate({userId: payload.user.pk, imageUrl: payload.imageUrl})


  switch (type)
  {
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        error: null
      }
    
    case LOGIN_SUCCESS:
      localStorage.setItem('access', payload.access)
      localStorage.setItem('refresh', payload.refresh)
      
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
        error: null
      }
    
    case GOOGLE_AUTH_SUCCESS:
      localStorage.setItem('access', payload.access_token)
      localStorage.setItem('refresh', payload.refresh_token)

      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
        error: null
      }
    
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        error: null
      }
    
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
        error: null
      }
    
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated : false
      }
    
    case USER_LOADED_FAIL:
      return {
        ...state,
       user: null
      }
    
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case GOOGLE_AUTH_FAIL:
    case LOGOUT:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      return  {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        error: payload,
        user: null
      }
    
    
      case PASSWORD_RESET_SUCCESS:
      case PASSWORD_RESET_FAIL:
      case PASSWORD_RESET_CONFIRM_SUCCESS:
      case PASSWORD_RESET_CONFIRM_FAIL:
      case ACTIVATION_SUCCESS:
      case ACTIVATION_FAIL:
          return {
                ...state
            }
    
      
    default:
      return state;
  }
}

export default AuthReducer