import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/auth.action'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import { AiFillEdit } from 'react-icons/ai'
import { storage } from '../../firebase'





const Signup: React.FC = ({ error, isAuthenticated, signup, setLoginState }: any) => {
  
  const router = useRouter();
  const profileImageRef = useRef(null);
  // Reference to elements of input from inarray form
  const inputRef = useRef([]);


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

  
  const { id, profile_image , email, first_name, last_name, password, re_password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

    //check re enter password is equal 
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

    for (let i in inputRef.current)
    {
      //check any input fields are empty 
      if (profileImageRef.current[0].value == '')
      {
        alert("image fields can not be empty ")
        return;
      }

      if (inputRef.current[i].value == '')
      {
        inputRef.current[i].classList.add("red-border");
        inputRef.current[i].placeholder = "Can't be empty";
        inputRef.current[i].focus();
        return;
      }
    }

    const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password == re_password && password.search(regularExpression) != -1)
    {
      signup(id, profile_image, email, first_name, last_name, password, re_password);
       //check submit sign up response error or not .
      if (error == null)
      {
        setIsAccountCreated({ created: true, message: "Activate your account via email" })
        setFormData(initialValues);
        setImageFile(null);
      } else {
        setIsAccountCreated({created: false, message: "Signup Fail ! Tips: Keep password strong inlcuding number, symbol and altleast 8 character. May be wrong email address !"})
      }
      }
    else {
      alert("Password must be atleat 8 character including Number ,one capital and sepcial symbol ..");
    }


   
  }

  const onBlur = (e) => {
    //Check input fields are input if user removes focus on input.
    if (e.target.value == '')
    {
      e.target.classList.add("red-border")
    } else {
      e.target.classList.remove("red-border")
    }
  }

  const onClickProfileImage = (e) => {
    //Allow to click to porfile picture as input file |
    profileImageRef.current.click();
  }

  const handleUploadImage = (file) => {
    const imageSizeMB = file.size / 1024 / 1024;
    if (imageSizeMB > 1)
    {
      alert(" File size can not be more than 1 MB . Please compress you image and upload again !");
      return;
    }
    const image_name = file.name;
    const uploadTask = storage.ref(`Profile-images/${image_name}`).put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("Profile-images")
          .child(image_name)
          .getDownloadURL()
          .then(url => {
            setFormData({...formData, profile_image: url})
          });
      }
    ); 
  }

  const onChangeProfileimage = e => {
    const file = e.target.files[0];

    // To display preview image |
    if (file)
    {  
      setImageFile(URL.createObjectURL(file));
      handleUploadImage(file);
    }
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
            <input
              type="email"
              onBlur={onBlur}
              value={email}
              required
              placeholder="Email"
              className="block"
              name="email"
              ref={(emailRef) => (inputRef.current[0] = emailRef)}
              onChange={onChange} />
            
            <input
              type="text"
              onBlur={onBlur}
              value={first_name}
              required
              placeholder="First Name "
              className="block"
              name="first_name"
              ref={(f_nameRef) => (inputRef.current[1] = f_nameRef)}
              onChange={onChange} />
            
            <input
              type="text"
              onBlur={onBlur}
              value={last_name}
              required
              placeholder="Last Name "
              className="block"
              name="last_name"
              ref={(l_nameRef) => (inputRef.current[2] = l_nameRef)}
              onChange={onChange} />
            
            <input
              type="password"
              onBlur={onBlur}
              value={password}
              required
              placeholder="Password"
              className="block"
              name="password"
              ref={(passRef) => (inputRef.current[3] = passRef)}
              onChange={onChange} />
            
            <input
              type="password"
              onBlur={onBlur}
              value={re_password}
              required
              placeholder="Confirm Password"
              className="block"
              name="re_password"
              ref={(re_passRef) => (inputRef.current[4] = re_passRef)}
              onChange={onChange} />
            
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