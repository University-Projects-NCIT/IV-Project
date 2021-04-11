import React from 'react'
import MainContent from './MainContent'

const Main: React.FC = () =>{
return(
    <div className="flex flex-col w-screen h-screen bg-white-500">
        <div className="bg-img w-screen h-1/4 bg-blue-500 sticky z-0">
         <img></img>
        </div>
        <MainContent/>
    </div>
    )
}

export default Main