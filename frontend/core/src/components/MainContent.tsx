import React ,{ useState }from 'react'
import ProductListCard from './ProductListCard'
import {FiMoreHorizontal} from 'react-icons/fi'
import {MdAdd} from 'react-icons/md'
import {IoMdNotifications} from 'react-icons/io'
import { IconContext } from 'react-icons/lib'
import Search from './Search'
import UpcommingProductCard from './UpcommingProductCard'
import NewsLatterCard from './NewsLatterCard'
import {useToggle } from '../hooks/Togglge'


const MainContent: React.FC = () => {
	/**
	 * MainContent is the second main component
	 * It holds all the other component rendering in Home
	 * displays the product list and card etc.
	 */

    //Pop us when click to profile image if loged in is false
    const [toggled, toggle] = useToggle(false);

    const profileImageClick = () => {
        toggle();
    }

    const dismissBack = () => {
        toggle();
    }

    const loginWithGoogle = () => {
        // login
        console.log("login")
    }

    const signupWithGooglw = ()=> {
        //TODO sign up 
        console.log("signup")
    }


    return(
        <>
            {toggled ? (
                <>
                    <div className="w-full h-full bg-black opacity-75 z-20 fixed" onClick={dismissBack}></div>
                    <div className="w-80 h-80 bg-white z-30 p-8 centered-fixed fixed ">
                        <img src="./images/michaeljackson.jpg" className="w-14 h-14"></img>
                        <div className="w-full h-14 bg-color5" onClick={loginWithGoogle}>Login With Google</div>
                        <div><p>Already have an account?</p></div>
                        <div className="w-full h-14 bg-color5" onClick={signupWithGooglw}>Sign Up With Google</div>

                    </div>
                </>
            ) : null}
            
     


            <div className="h-auto w-full rounded-t-lg -mt-4 bg-drak_blue_background z-10">
               <div className="w-16 h-16 rounded-full m-auto relative -mt-8 mb-4">
                   <div className="profile-image-back w-16 h-16 rounded-full absolute"></div>
                   <div className="absolute cursor-pointer" onClick={profileImageClick}><img src="./images/michaeljackson.jpg" className="w-16 h-16 rounded-full"/></div>
               </div>
               <IconContext.Provider
                    value={{ color: '#ffffff', size: '1.5rem' }}>
                    <div>
                        <div className="flex flex-row w-32 m-auto justify-center">
                            <div className="w-6 h-6 -mt-3 realtive cursor-pointer">
                                <div className="option-btn w-6 h-6 rounded-full absolute"></div>
                                <div className="icon-btn rounded-full w-6 h-6 absolute bg-blue_secondary"><FiMoreHorizontal/></div>
                            </div>
                            <div className="w-6 h-6 m-2 realtive cursor-pointer">
                                <div className="option-btn w-6 h-6 rounded-full absolute"></div>
                                <div className="icon-btn rounded-full w-6 h-6 absolute bg-blue_secondary"><MdAdd/></div>
                            </div>
                            <IconContext.Provider
                            value={{color:'#F39912', size:'1.3rem' }}>
                            <div className="w-6 h-6 -mt-3 realtive cursor-pointer">
                                <div className="option-btn w-6 h-6 rounded-full absolute"></div>
                                <div className="icon-btn rounded-full w-6 h-6 absolute bg-blue_secondary"><IoMdNotifications className="m-auto"/></div>
                            </div>
                            </IconContext.Provider>
                        </div>
                        <div className="ml-16 md:-mt-8 mr-16">
                            <Search />
                        </div>
                    </div>
                </IconContext.Provider>

                <div className="w-full flex flex-row mt-8">
                    
                    <div className="left-container h-auto flex flex-col md:pl-32 pr-4 pl-4">
                        <div className="flex flex-row text-white justify-end -mb-4">
                            <button className="pl-2 pr-2 pt-1 btn bg-color4 opacity-60 hover:opacity-70">Popular</button>
                            <div className="line"></div>
                            <button className="pl-2 pr-2 pt-1 btn bg-color4 opacity-60 hover:opacity-70">Newest</button>
                        </div>
                        <ProductListCard/>
                        <ProductListCard/>
                        <ProductListCard/>
                    </div>
                    <div className="right-container h-auto pt-1 mr-4 lg:mr-40">
                        <UpcommingProductCard />
                        <NewsLatterCard/>
                    </div>
                </div>   
            </div>

        
            <style jsx >{`
                .profile-image-back{
                    background: conic-gradient(from 180deg at 50% 50%, #F1239F 0deg, #00FC19 46.06deg, #EC1616 85.46deg, #2F80ED 147.09deg, #F39912 198.08deg, #CD0666 245.92deg, #11D2FC 304.76deg, #F1239F 360deg);
                    filter: blur(5px);
                    -webkit-animation:spin 4s linear infinite;
                    -moz-animation:spin 4s linear infinite;
                    animation:spin 4s linear infinite;
                }
                
                .option-btn{
                    background: conic-gradient(from 180deg at 50% 50%, #F1239F 0deg, #00FC19 46.06deg, #EC1616 85.46deg, #2F80ED 147.09deg, #F39912 198.08deg, #CD0666 245.92deg, #11D2FC 304.76deg, #F1239F 360deg);
                    filter: blur(2px);
                }

                .btn{
                    border: none;
                    outline: none;
                }

                .line{
                    width: 3px;
                    height: 100%;
                    background: linear-gradient(#2F80ED,#EC1616);
                }
                

                .left-container{
                    width: 100%;
                }

                .right-container{
                    display: none;
                }

                .centered-fixed{
                    left: 50%;
                    transform : translate(-50%, 0);
                }

 

                @media only screen and (min-width: 768px) {
                    .left-container{
                        width: 65%;
                    }

                    .right-container{
                        width: 35%;
                        display: block;
                    }

                }

                // Animation for 360 rotation background 
                @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
                @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
                @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg);}}


					
				`}
			</style>
		</>
	);
}

export default MainContent;
