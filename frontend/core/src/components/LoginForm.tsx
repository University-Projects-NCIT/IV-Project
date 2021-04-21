import React from 'react'
import {IconContext} from 'react-icons/lib'
import { ImCross } from 'react-icons/im'
import { FcGoogle } from 'react-icons/fc'
import {useToggle} from '../hooks/Toggle'




const LoginForm: React.FC = (props: any ) : JSX.Element=> {

  const toggle = props.toggleForm
  return(
    <>
					<div
						className="w-full h-full bg-black opacity-75 z-20 fixed"
						onClick={toggle}
					></div>
					<div className="w-full h-full xs:w-80 xs:h-96 m-auto bg-drak_blue_background xs:bg-white z-30 centered-fixed fixed xs:mt-16 p-4">
						<IconContext.Provider value ={{color: "#ffffff", size: "2rem"}}>
							<div className="m-auto w-8 xs:hidden mt-16" onClick={toggle}><ImCross className=""/></div>
						</IconContext.Provider>
						<img src="./images/michaeljackson.jpg" className="w-32 h-32 rounded-3xl m-auto mt-8 mb-16"></img>
						<div className="w-full h-14 bg-color5 rounded-lg text-center align-baseline text-white">
							<FcGoogle />
							<p>Login With Google</p>
						</div>
						<div>
							<p>No, Account?</p>
						</div>
						<div className="w-full h-14 rounded-lg bg-color5 text-white" onClick={()=> console.log("sign up")}>
							<FcGoogle/>
							<p>Login With Google</p>
						</div>

					</div>
		</>
  )
}

export default LoginForm