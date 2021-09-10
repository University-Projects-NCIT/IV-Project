import React, { useState, useEffect , useContext, useRef} from 'react';
import { connect } from 'react-redux';
import { login ,googleAuthenticate} from '../../Redux/actions/auth.action';
import { useRouter } from 'next/router'
import { GoogleLogin} from 'react-google-login'
import { useMutation } from 'react-query';
import { addProfileImage } from '../../apis/productapi';

interface PropsInterface{
  access: string;
  error: string;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  googleAuthenticate: (access_token: string, imageUrl:string, getId : (id: number, imageUrl:string)=> void) => void;
  setLoginState: (activate: boolean) => void 
}

const Login: React.FC<PropsInterface> = React.memo(({ access, error, isAuthenticated, login, googleAuthenticate, setLoginState}) => {

  const router = useRouter();
  const initialValues = {
    email: '',
    password: ''
  }

  const [fromData, setFormData] = useState(initialValues);
  const { email, password } = fromData;
  const inputRef = useRef([])

  const mutation = useMutation(addProfileImage, {
    onSuccess: () => console.log("Added successfully "),
    onError: (err) => console.log(err)
  })

  

 
  const onSubmit =  (e) => {
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

    login(email, password)
    
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

   

  const getId = (id, imageUrl) => {
    mutation.mutate({userId: id, imageUrl})
  }


  const responseGoogle = (response) => {
    
    console.log("resposne", response)
    
    if (typeof response.accessToken != "undefined")
    {
      console.log("resposne ", response.profileObj.imageUrl)
      const imageUrl = response.profileObj.imageUrl
      googleAuthenticate(response.accessToken, imageUrl, getId)
    }

  }

  return (
    <>
      <div className="w-full h-auto">
        <div><img src="/images/cryptopunk8550.png" className="w-24 h-24 mb-8 rounded-full m-auto"></img></div>
        <GoogleLogin
          clientId="868430702423-gk55l9271hl75gotk2hh3t89u2etnmhj.apps.googleusercontent.com"
          buttonText="Login with Google Account"
          disabled={false}
          className="w-full"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />


        <div className="flex flex-col-row items-center mt-4 mb-4">
          <div className="line w-1/2 bg-gray-300"></div>
          <div className="text-gray-300 ml-2 mr-2 text-xs">OR</div>
          <div className="line w-1/2 bg-gray-300"></div>
       </div>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            ref={ref => { inputRef.current[0] = ref }}
            onBlur={onBlur}
            name="email"
            value={email}
            required
            placeholder="Email"
            className="block w-full h-8 bg-item_list_bg mb-2 input border-none pl-2 rounded-sm"
            onChange={onChange}></input>
          
          <input
            type="password"
            ref={ref => { inputRef.current[1] = ref }}
            onBlur={onBlur}
            name="password"
            value={password}
            required
            placeholder="Password"
            className="block w-full h-8 bg-item_list_bg mb-4 input border-none pl-2 rounded-sm"
            onChange={onChange}></input>
          
          {/* {error != null && <h3 className="text-red-700"> Something went wrong !</h3> } */}
          <button type="button" className="w-full h-8 bg-color5 text-white text-sm rounded-full uppercase mt-4 focus:outline-none hover:opacity-70" onClick={onSubmit}>Login</button>
          <h2 className="text-gray-200 mt-2 mb-2">No account yet ?</h2>
          <button type="button" className="w-full h-12 bg-color5 text-sm rounded-t-md text-white uppercase focus:outline-none hover:opacity-70" onClick={signup}>Signup</button>
          <button type="button" className="w-full h-12 text-xs bg-color5 rounded-b-md text-white uppercase focus:outline-none hover:opacity-70" onClick={forgetPassword}>Forget Password ?</button>
        </form>

        
      </div>

    <style jsx>{`
      .red-border{
            outline-offset: 0px;
						outline: none;
						box-shadow: 0.1px 0.1px 1px 0.1px red;
          }
          .line {
            height: 1px;
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

export default connect(mapStateToProps,{login, googleAuthenticate})(Login)