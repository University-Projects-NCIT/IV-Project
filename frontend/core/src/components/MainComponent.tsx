import React from 'react'
import MainContent from './MainContent'

const MainComponent: React.FC = () =>{
return(
   <>
    <div className="flex flex-col">
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



export default MainComponent