import React, { useState, useContext } from 'react'
import Login from './Login'
import Signup from './Signup'
import { ToggleContext } from '../../Contexts/ToggleContext'
import {ImCross} from 'react-icons/im'





const LoginForm: React.FC = () => {

	const [loginState, setLoginState] = useState(true);

	const context = useContext(ToggleContext);
	const toggle: any = context;
	
  return(
		<>
					<div
						className="w-full h-full bg-black opacity-75 z-20 fixed"
						onClick={toggle}
					></div>
			<div className="w-full auth-container max-w-md m-auto bg-drak_blue_background z-30 centered-fixed fixed p-4">
				<div className="sm:invisible" onClick={()=> toggle()}><ImCross className="text-gray-50 h-6 w-6"/></div>
						{(loginState) ? <Login setLoginState={setLoginState} /> : <Signup setLoginState={setLoginState} /> }
					</div>

			<style jsx>{`
					
					.auth-container {
						height : 100vh;
						margin-top: 0px;
					}
					
						@media only screen and (min-width: 455px) {
						 .auth-container {
							height : auto;
							margin-top: 5rem;
					}
					
						}

					`}</style>
		</>
  )
}

export default LoginForm