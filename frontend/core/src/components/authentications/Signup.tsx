import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/auth.action'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import { AiFillEdit } from 'react-icons/ai'
import { storage } from '../../firebase'


interface PropsInterface{
  error: string;
  isAuthenticated: boolean;
  signup: (id, profile_image, email, first_name, last_name, password, re_password) => void;
  setLoginState: (active : boolean) => void 
}


const Signup: React.FC<PropsInterface> = ({ error, isAuthenticated, signup, setLoginState }) => {
  
  const initialValues= {
    id: uuidv4(),
    email: '',
    profile_image: '',
    first_name: '',
    last_name: '',
    password: '',
    re_password: ''
  }
  
  const router = useRouter();
  const inputRef = useRef([]);

  const [imageFile ,setImageFile] = useState(null)
  const [isAccountCreated, setIsAccountCreated] = useState({
    created: false,
    message: ''
  });

  const [formData, setFormData] = useState(initialValues);


  const { id, profile_image , email, first_name, last_name, password, re_password } = formData;

  const onChange = (e) => {

    if (e.target.name == "profile_image")
    {
      setImageFile(URL.createObjectURL(e.target.files[0]));
      handleUploadImage(e.target.files[0]);
      return
    }
    
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

      if (inputRef.current[i].value == '')
      {

        if (inputRef.current[i].name == "profile_image")
        {
          return alert("Profile Image Can not be empty !")  
        }
        
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



  const login = () => {
    setLoginState(true)
  }


  return (
    <>
    <div className="w-full h-auto flex flex-col">
        <div className="relative w-24 h-24 m-auto mb-8">
          <img src={imageFile || "/images/default_profileimg.jpg"} className="w-24 h-24 rounded-full m-auto absolute object-cover"></img>
            <div className="w-24 h-24 absolute rounded-full flex flex-row justify-center items-center">Edit<AiFillEdit className="inline"/></div>
            <div className="w-24 h-24 absolute rounded-full" onClick={ ()=> inputRef.current[5].click()}></div>
            <input type="file" name="profile_image" className="hidden absolute" ref={ref => inputRef.current[5] = ref} onChange={onChange}></input>
        </div>

        <div>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              onBlur={onBlur}
              value={email}
              required
              placeholder="Email"
              className="block w-full h-10 bg-item_list_bg mb-4 input border-none pl-2 rounded-sm"
              name="email"
              ref={(ref) => (inputRef.current[0] = ref)}
              onChange={onChange} />
            
            <input
              type="text"
              onBlur={onBlur}
              value={first_name}
              required
              placeholder="First Name "
              className="block capitalize w-full h-10 bg-item_list_bg mb-4 input border-none pl-2 rounded-sm"
              name="first_name"
              ref={(ref) => (inputRef.current[1] = ref)}
              onChange={onChange} />
            
            <input
              type="text"
              onBlur={onBlur}
              value={last_name}
              required
              placeholder="Last Name "
              className="block capitalize w-full h-10 bg-item_list_bg mb-4 input border-none pl-2 rounded-sm"
              name="last_name"
              ref={(ref) => (inputRef.current[2] = ref)}
              onChange={onChange} />
            
            <input
              type="password"
              onBlur={onBlur}
              value={password}
              required
              placeholder="Password"
              className="block w-full h-10 bg-item_list_bg mb-4 input border-none pl-2 rounded-sm"
              name="password"
              ref={(ref) => (inputRef.current[3] = ref)}
              onChange={onChange} />
            
            <input
              type="password"
              onBlur={onBlur}
              value={re_password}
              required
              placeholder="Confirm Password"
              className="block w-full h-10 bg-item_list_bg mb-4 input border-none pl-2 rounded-sm"
              name="re_password"
              ref={(ref) => (inputRef.current[4] = ref)}
              onChange={onChange} />
            
              {isAccountCreated.message != '' && <h2 className="text-gray-600"> {isAccountCreated.message} </h2>} 
            <button type="submit" className="w-full h-12 bg-color5 text-white uppercase focus:outline-none hover:opacity-70 mt-4" onClick={onSubmit}>Signup</button>
            
          </form>
          <h2 className="mt-2 mb-2 text-gray-300">Already have an account ?</h2>
          <button className="w-full h-12 bg-color5 text-white uppercase focus:outline-none hover:opacity-70" onClick={login}>Login</button>
        </div>

      </div>
      
      <style jsx>
        {`
        .red-border{
            outline-offset: 0px;
						outline: none;
						box-shadow: 0.1px 0.1px 1px 0.1px red;
            background:#FF1414;
            opacity: 0.5;
          }

      .input {
						color: #ffffff;
						padding-left: 1rem;
						-webkit-transition: box-shadow 0.3s;
						transition: box-shadow 0.3s;
					}
          
					.input:focus {
						outline-offset: 1px;
						outline: none;
						box-shadow: 1px 0.3px 2px 0.1px #111e6c;
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