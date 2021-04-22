import React, { useState, useContext } from 'react'
import {IconContext} from 'react-icons/lib'
import { ImCross } from 'react-icons/im'
import { FcGoogle } from 'react-icons/fc'
import Login from './Login'
import Signup from './Signup'
import {ToggleContext} from '../../Contexts/ToggleContext'





const LoginForm: React.FC = (props: any): JSX.Element => {

	const [loginState, setLoginState] = useState(true);
	const [signupState, setSignupState] = useState(false);
	const [forgetPassState, setForgetPassState] = useState(false);


	const context = useContext(ToggleContext);
	const toggle: any = context;
  return(
		<>
					<div
						className="w-full h-full bg-black opacity-75 z-20 fixed"
						onClick={toggle}
					></div>
					<div className="w-full h-full xs:w-1/3 xs:h-4/5 m-auto bg-drak_blue_background xs:bg-white z-30 centered-fixed fixed xs:mt-16 p-4">
						{(loginState)? <Login setLoginState={setLoginState} /> : <Signup setLoginState={setLoginState} /> }
						{/* { signupState && <Signup setLoginState={setLoginState} />} */}
						{/* {forgetPassState && <ForgetPassword forgetPassState={forgetPassState}/>}				 */}
					</div>
		</>
  )
}

export default LoginForm