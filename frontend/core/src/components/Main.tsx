import React from 'react'
import MainContent from './MainContent'

const Main: React.FC = () =>{
return(
   <>
    <div className="w-screen h-screen bg-white-500 flex flex-col">
        <div className="header w-full h-60"></div>   
        <MainContent/>
    </div>

    <style jsx>{`
    .header {
        background-image: url("./images/startup.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    `}
    </style>
   </>
    )
}



export default Main