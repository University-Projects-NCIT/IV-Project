import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/auth.action'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import {AiFillEdit} from 'react-icons/ai'





const Signup: React.FC = ({ error, isAuthenticated, signup, setLoginState }: any) => {
  
  const router = useRouter();
  const profileImageRef = useRef(null);

  const initialValues= {
    id: uuidv4(),
    email: '',
    profile_image: '',
    first_name: '',
    last_name: '',
    password: '',
    re_password: ''
  }

  const [imageFile ,setImageFile] = useState(null)
  

  const [isAccountCreated, setIsAccountCreated] = useState({
    created: false,
    message: ''
  });
  const [formData, setFormData] = useState(initialValues);

  
  const { id, email, first_name, last_name, password, re_password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

    if (e.target.name == "re_password" && formData.password != e.target.value)
    {
       e.target.classList.add("red-border") 
    }
    else {
       e.target.classList.remove("red-border") 
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    for (let key in formData)
    {
      if (formData[key] == '') {
        return;
      }
    }
    console.log("form submitted ")
    signup(id,email, first_name, last_name, password, re_password );
    setFormData(initialValues);

    if (error == null)
    {
      setIsAccountCreated({created: true, message: "Activate your account via email"})
    } else {
      setIsAccountCreated({created: false, message: "Signup Fail !"})
    }
  }

  const onBlur = (e) => {
    if (e.target.value == '')
    {
      e.target.classList.add("red-border")
    } else {
      e.target.classList.remove("red-border")
    }
  }

  const onClickProfileImage = (e) => {
    profileImageRef.current.click();
  }

  const onChangeProfileimage = e => {
    const file = e.target.files[0];

    // To display preview image 
    if (file)
    {  
      setImageFile(URL.createObjectURL(file))
    }

    setFormData({ ...formData, [e.target.name]: file})
    }


  const login = () => {
    setLoginState(true)
  }

  const forgetPassword = () => {
    router.push('/api/forgetpassword')
  }

  return (
    <>
    <div className="w-full h-auto flex flex-col">
        <div className="relative w-32 h-32 m-auto">
          <img src={imageFile || "/images/default_profileimg.jpg"} className="w-32 h-32 rounded-full m-auto absolute"></img>
            <div className="w-32 h-32 absolute rounded-full flex flex-row justify-center items-center">Edit<AiFillEdit className="inline"/></div>
            <div className="w-32 h-32 absolute rounded-full" onClick={onClickProfileImage}></div>
            <input type="file" name="profile_image" className="hidden absolute" ref={profileImageRef} onChange={onChangeProfileimage}></input>
        </div>

        <div>
          <form onSubmit={onSubmit}>
          <input type="email" onBlur={onBlur} value={ email } required placeholder="Email" className="block" name="email" onChange={onChange}></input>
          <input type="text" onBlur={onBlur} value={first_name } required placeholder="First Name " className="block" name="first_name" onChange={onChange}></input>
          <input type="text" onBlur={onBlur} value={last_name} required placeholder="Last Name " className="block" name="last_name" onChange={onChange}></input>
          <input type="password" onBlur={onBlur} value={ password} required placeholder="Password" className="block" name="password" onChange={onChange}></input>
          <input type="password" onBlur={onBlur} value={ re_password} required placeholder="Confirm Password" className="block" name="re_password" onChange={onChange}></input>
          </form>
          {isAccountCreated.message != '' && <h2 > {isAccountCreated.message} </h2>}
          <button className="w-full h-12 bg-color5 text-white" onClick={onSubmit}>Signup</button>
          <h2>Already have an account ?</h2>
          <button className="w-full h-12 bg-color5 text-white" onClick={login}>Login</button>
          <button className="w-full h-12 bg-color5 text-white" onClick={forgetPassword}>Forget Password ?</button>  
        </div>

      </div>
      
      <style jsx>
        {`
        .red-border{
          background: red;
        }
        `}
      </style>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error
})

export default connect(mapStateToProps, {signup})(Signup)