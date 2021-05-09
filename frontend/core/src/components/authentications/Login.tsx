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
        <div><img src="/images/default_profileimg.jpg"  className="w-32 h-32 rounded-full m-auto"></img></div>
        <form onSubmit={onSubmit}>
          <input type="email" ref={ref => {inputRef.current[0] = ref}} onBlur={ onBlur} name ="email" value={email} required placeholder="Email" className="block" onChange={onChange}></input>
          <input type="password" ref={ref => {inputRef.current[1] = ref}} onBlur={onBlur} name="password" value={password} required placeholder="Password" className="block" onChange={onChange}></input>
          {error != null && <h3 className="text-red-700"> Something went wrong !</h3> }
          <button type="button" className="w-full h-12 bg-color5 text-white" onClick={onSubmit}>Login</button>
          <h2>No account yet ?</h2>
          <button type="button" className="w-full h-12 bg-color5 text-white" onClick={signup}>Signup</button>
          <button type="button" className="w-full h-12 bg-color5 text-white" onClick={forgetPassword}>Forget Password ?</button>
        </form>
      </div>

    <style jsx>{`
      .red-border{
        background: red;
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