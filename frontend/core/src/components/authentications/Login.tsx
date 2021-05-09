import React, { useState, useEffect , useContext, useRef} from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth.action';
import { useRouter } from 'next/router'
import {ToggleContext} from '../../Contexts/ToggleContext'

interface PropsInterface{
  access: string;
  error: string;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  setLoginState: (activate: boolean) => void 
}

const Login: React.FC<PropsInterface> = React.memo(({ access, error, isAuthenticated, login, setLoginState}) => {

  const router = useRouter();
  const initialValues = {
    email: '',
    password: ''
  }

  const context = useContext(ToggleContext);
  const toggle: any = context;

  const [fromData, setFormData] = useState(initialValues);
  const { email, password } = fromData;
  const inputRef = useRef([])

 
  const onSubmit = async (e) => {
    e.preventDefault();
    
    for (let i in inputRef.current)
    {
      if (inputRef.current[i].value == '')
      {
        inputRef.current[i].classList.add('red-border')
        inputRef.current[i].placeholder = "Can't be empty !"
        inputRef.current[i].focus()
        return;
      }  
    }

    const res = await login(email, password)
    
  }

  const onChange = (e) => {
    setFormData({...fromData, [e.target.name]: e.target.value})
  }
  
  const onBlur = (e) => {
    if (e.target.value == '')
    {
      e.target.classList.add("red-border")
    } else {
      e.target.classList.remove("red-border")
    }
  }


  const signup = () => {
    setLoginState(false)
  }

  const forgetPassword = () => {
    router.push('/forgetpassword')
  }

  return (
    <>
      <div className="w-full h-auto">
        <div><img src="/images/default_profileimg.jpg"  className="w-24 h-24 rounded-full m-auto"></img></div>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            ref={ref => { inputRef.current[0] = ref }}
            onBlur={onBlur}
            name="email"
            value={email}
            required
            placeholder="Email"
            className="block w-full h-10 bg-item_list_bg mb-4 input border-none mt-8 pl-2 rounded-sm"
            onChange={onChange}></input>
          
          <input
            type="password"
            ref={ref => { inputRef.current[1] = ref }}
            onBlur={onBlur}
            name="password"
            value={password}
            required
            placeholder="Password"
            className="block w-full h-10 bg-item_list_bg mb-4 input border-none pl-2 rounded-sm"
            onChange={onChange}></input>
          
          {error != null && <h3 className="text-red-700"> Something went wrong !</h3> }
          <button type="button" className="w-full h-12 bg-color5 text-white uppercase mt-12 focus:outline-none hover:opacity-70" onClick={onSubmit}>Login</button>
          <h2 className="text-gray-200 mt-2 mb-2">No account yet ?</h2>
          <button type="button" className="w-full h-12 bg-color5 text-white uppercase focus:outline-none hover:opacity-70" onClick={signup}>Signup</button>
          <button type="button" className="w-full h-12 text-xs bg-color5 text-white uppercase focus:outline-none hover:opacity-70" onClick={forgetPassword}>Forget Password ?</button>
        </form>
      </div>

    <style jsx>{`
      .red-border{
            outline-offset: 0px;
						outline: none;
						box-shadow: 0.1px 0.1px 1px 0.1px red;
          }

      .input {
						color: #ffffff;
						padding-left: 1rem;
						-webkit-transition: box-shadow 0.3s;
						transition: box-shadow 0.3s;
					}
          
					.input:focus {
						outline-offset: 0px;
						outline: none;
						box-shadow: 1px 0.3px 2px 0.1px #111e6c;
					}
     `}
    </style>
    </>
  )


})

const mapStateToProps = state=> ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  access: state.auth.access
})

export default connect(mapStateToProps,{login})(Login)