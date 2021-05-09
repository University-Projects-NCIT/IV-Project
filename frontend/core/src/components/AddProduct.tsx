import React, { useState } from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import { storage } from '../firebase'
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'
import { addProduct, addCategories, addIcon, addProductImages } from '../productapi'
import { useMutation, useQueryClient } from 'react-query'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import {IoChevronBackCircleSharp} from 'react-icons/io5'
import { IconContext } from 'react-icons/lib'
import { useRouter } from 'next/router'


const AddProduct: React.FC = ({ user, isAuthenticated }: any) => {

  const productId = uuidv4()

  const initialvalues = {
    productID: "",
    title: "",
    tagline: "",
    product_link: "",
    upvote: 0,
    description: "",
    launch_at: "",
    author: ""
  }

  const [formData, setFormData] = useState(initialvalues)

  const inputRef = React.useRef([])
  const iconRef = React.useRef(null)
  const imagesRef = React.useRef(null)
  const [icon, setIcon] = useState(null)
  const [images, setImage] = useState([]) 
  const [iconUrl, setIconUrl] = useState(null)
  const [imagesUrl, setImageUrl] = useState([])
  const [categories, setCategories] = useState("")
  const [inserted, setInserted] = useState(false)

  const router = useRouter()
  
  const productMutate = useMutation(addProduct, {
    onSuccess: () => remainingMutate(),
    onError: (err) => console.log("Error for adding product " + err)
  })

  const iconMutate = useMutation(addIcon, {
    onSuccess: () => console.log("Added Icon "),
    onError: (err) => console.log("Error to adding Icon " + err),
    onMutate: ()=> console.log("test")
  })

  const productImagesMutate = useMutation(addProductImages, {
    onSuccess: () => console.log("Added Images "),
    onError: (err) => console.log("Error to add product images " + err)
  })

  const categoriesMutate = useMutation(addCategories, {
    onSuccess: () => setInserted(true),
    onError: (err) => console.log("Error to add categories " + err)
  })

 

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isAuthenticated)
    {
     return alert("login First To Post ") 
    }

    for (let i in inputRef.current) {


      // if(inputRef.current[i].name == "product_link")
      // {
      //   const reg = "/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g"
      //   const find = inputRef.current[i].value.search(reg)
      //   if (find < 0)
      //   {
      //     inputRef.current[i].classList.add("red-border")
      //     inputRef.current[i].placeholder = "Enter valid url"
      //    }
      // }

      if (inputRef.current[i].value == "")
      {
        inputRef.current[i].classList.add("red-border")
        inputRef.current[i].focus()
        return
      } else {
        inputRef.current[i].classList.remove("red-border")
      }
    }

     if (iconUrl == "")
    {
      return alert("Select Icon Image ")
    }

    if (imagesUrl.length == 0)
    {
      return alert("Select App Images ")
    }

    const utcDateTime = new Date(formData.launch_at).toISOString()

    productMutate.mutate({ ...formData,launch_at: utcDateTime, productID: productId, author: user.id })
    
  }

  const remainingMutate = () => {
    iconMutate.mutate({ product: productId, image: iconUrl })
      imagesUrl.map(image => {
        productImagesMutate.mutate({product: productId, image : image})
      })
      categories.split(",").map(name => {
        categoriesMutate.mutate({name, product: productId})
      })
  }

  const onChange = (e) => {

    if (e.target.name == "icon_image")
    {
      setIcon(URL.createObjectURL(e.target.files[0]))
      handleUploadImage(e.target.files[0], e.target.name)
      return 
    }

    if (e.target.name == "images")
    {
      setImage([...images ,URL.createObjectURL(e.target.files[0])])
      handleUploadImage(e.target.files[0], e.target.name)
      return 
    }

    if (e.target.name == "categories")
    {
      return setCategories(e.target.value)
    }

    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

   const handleUploadImage = (file,name) => {
    const imageSizeMB = file.size / 1024 / 1024;
    if (imageSizeMB > 3)
    {
      alert(" File size can not be more than 3 MB . Please compress you image and upload again !");
      return;
    }
    const image_name = file.name;
    const uploadTask = storage.ref(`${name}/${image_name}`).put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref(name)
          .child(image_name)
          .getDownloadURL()
          .then(url => {

            console.log("image url " + url )
            if (name == "icon_image")
            {
              setIconUrl(url.toString())
            } else {
              setImageUrl([...imagesUrl, url.toString()])
            }
          });
      }
    );
    
   }

  const insertedSuccess = () => {
    return (
      <React.Fragment>
        <div></div>
        <div>
          
          <div className="">
            <IconContext.Provider value={{color: "#283A45"}}>
              <IoChevronBackCircleSharp onClick={()=> router.push("/")} className=" w-12 h-12 opacity-90 hover:opacity-70 cursor-pointer"/>
            </IconContext.Provider>
            
            
            <h1 className="text-lg h-12 text- mb-14 text-center">Done
              <IconContext.Provider value={{color: "#083C82"}}>
                <IoCheckmarkDoneCircleOutline className="m-auto w-12 h-12" /> 
               </IconContext.Provider> 
                </h1>

          </div>
          <img src="./images/undraw_done.svg" className="w-3/4"></img>
        </div>
      </React.Fragment>
     )
   }

  return (
    <div>
      { inserted ? insertedSuccess() :
      <>
        <form onSubmit={onSubmit}>
          <label className="block capitalize mb-2" htmlFor="title">Title of your App<span className="text-red-600"> *</span></label>
          <input
            required
            type="text"
            name="title"
            onChange={onChange}
            value={formData.title}
            ref={(ref) => inputRef.current[0] = ref}
            className="w-full h-9 mb-4 hover:opacity-70 bg-item_list_bg text-lg border-none input rounded-sm"
          >
          </input>
        
          <label className="block capitalize mb-2" htmlFor="title">Tagline of your App<span className="text-red-600"> *</span></label>
          <input
            type="text"
            name="tagline"
            onChange={onChange}
            value={formData.tagline}
            ref={(ref) => inputRef.current[1] = ref}
            className="w-full h-9 mb-4 hover:opacity-70 bg-item_list_bg text-lg border-none input rounded-sm"
            required>
          </input>
        
          <label className="block capitalize mb-2" htmlFor="title">Description of your App<span className="text-red-600"> *</span></label>
          <textarea
            name="description"
            onChange={onChange}
            value={formData.description}
            ref={(ref) => inputRef.current[2] = ref}
            placeholder="Describe about you app ."
            className="w-full pt-2 hover:opacity-70 textarea mb-4 bg-item_list_bg border-none input rounded-sm"
            required>
          </textarea>

          <label className="block capitalize mb-2" htmlFor="title">Launching date and time <span className="text-red-600"> *</span></label>
          <input
            type="datetime-local"
            name="launch_at"
            onChange={onChange}
            value={formData.launch_at}
            ref={(ref) => inputRef.current[3] = ref}
            className="w-1/2 h-12 text-xl mb-8 bg-item_list_bg border-none input rounded-sm"
            required>
          </input>
        
          <label className="block capitalize mb-2" htmlFor="title">Your app Icon<span className="text-red-600"> *</span></label>
          <input
            type="file"
            ref={iconRef}
            onChange={onChange}
            hidden
            name="icon_image"
            className="w-1/2 h-12 text-xl mb-8 bg-item_list_bg border-none input rounded-sm"
            required>
          </input>

          <div className="w-24 h-24 mt-2 mb-8 rounded-sm overflow-hidden cursor-pointer" onClick={() => iconRef.current.click()}>
            <img src={icon || "./images/default_image.png"} className="w-full h-full object-cover" alt="product image logo" />
          </div>
        
          <label className="block capitalize mb-2" htmlFor="title">Your app Images eg Screenshots etc.<span className="text-red-600"> *</span></label>
          <input
            type="file"
            hidden
            ref={imagesRef}
            onChange={onChange}
            name="images"
            className="w-1/2 h-12 text-xl mb-8 bg-item_list_bg border-none input rounded-sm"
            required>
          </input>
        
          <div className="mb-8 w-full flex flex-row">
            <div className="w-24 h-24 mt-2 bg-item_list_bg flex flex-row cursor-pointer" onClick={() => imagesRef.current.click()}><MdAddCircleOutline className="w-12 h-12 m-auto" /></div>
            {images.length != 0 ?
              images.map((image, i) => {
                return (
                  <div key={i} className="w-24 h-24 mt-2 overflow-hidden">
                    <img src={image || "./images/default_image.png"} className="w-full h-full object-cover" alt="product image logo" />
                  </div>)
              }) : null
            }
          </div>

        
          <label className="block capitalize mb-2" htmlFor="title">Your app link<span className="text-red-600"> *</span></label>
          <input
            type="url"
            name="product_link"
            onChange={onChange}
            value={formData.product_link}
            ref={(ref) => inputRef.current[4] = ref}
            className="w-full h-10 mb-8 hover:opacity-70 bg-item_list_bg border-none input rounded-sm" placeholder="eg. https://myapp.com"
            required></input>
        
          <label className="block capitalize mb-2" htmlFor="title">Categories<span className="text-red-600"> *</span></label>
          <input
            type="text"
            name="categories"
            onChange={onChange}
            value={categories}
            ref={(ref) => inputRef.current[5] = ref}
            className="w-full h-10  mb-8 hover:opacity-70 bg-item_list_bg border-none input rounded-sm"
            placeholder="Seperate with coma (,) "
            required></input>
        
          <button
            type="submit"
            onClick={onSubmit}
            className="border-none outline-none hover:opacity-70 focus:outline-none bg-item_list_bg w-full h-10 mt-8 mb-8">POST</button>
        </form>
        </>
      }
        
      <style jsx>{`
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

          .textarea{
            height : 10rem;
          }

          .red-border{
            outline-offset: 0px;
						outline: none;
						box-shadow: 1px 0.3px 4px 0.1px red;
          }
      `}</style>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(AddProduct);