import React from 'react'
import MainContent from './MainContent'

const Main: React.FC = () =>{
return(
   <>
    <div className="flex flex-col w-screen h-screen bg-white-500">
        <div className="header w-full h-96 bg-blue-500"></div>   
        <MainContent/>
    </div>

    <style jsx>{`
    .header {
        background-image : url("./images/startup.jpg");
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