import React, { useState, useContext } from 'react'
import Login from './Login'
import Signup from './Signup'
import { ToggleContext } from '../../Contexts/ToggleContext'
import {ImCross} from 'react-icons/im'





const LoginForm: React.FC = () => {

	const [loginState, setLoginState] = useState(true);

	const context = useContext(ToggleContext);
	const toggle: any = context;
	const authRef = React.useRef(null)
	
  return(
		<>
			<div
				className="w-full h-full bg-black opacity-75 z-20 fixed"
				onClick={toggle}
			></div>
			<div ref={authRef} className=" w-full pb-4 auth-container max-w-sm m-auto bg-drak_blue_background z-30 centered-fixed fixed pl-4 pr-4">
				<div className="sm:invisible" onClick={()=> toggle()}><ImCross className="text-gray-50 h-3 w-3 mt-4"/></div>
						{(loginState) ? <Login setLoginState={setLoginState} /> : <Signup setLoginState={setLoginState} /> }
			</div>

			<style jsx>{`
					
					.auth-container {
						height: 100vh;
						margin-top: 0px;
						transition:transform 2s;
					}

					.trans_animate{
					transform: scale(1);	
					}
					
						@media only screen and (min-width: 455px) {
						 .auth-container {
							height : auto;
							border-radius: 15px;
							margin-top: 4rem;
							
					}
					}

					`}</style>
		</>
  )
}

export default LoginForm