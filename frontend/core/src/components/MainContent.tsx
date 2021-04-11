import React from 'react'

const MainContent: React.FC = () =>{
    /**
     * MainContent is the second main component
     * It holds all the other component rendering in Home 
     * displays the product list and card etc. 
     */

    return(
        <>
            <div className="bg-red-500 h-full w-full -mt-4 rounded-t-xl z-10">
                <div className="w-16 h-16 bg-pink-500 rounded-full m-auto -mt-8"></div>
               <div className="flex flex-row justify-items-center justify-center mt-2"> 
                    <div className="w-8 h-8 bg-pink-500 rounded-full -mt-4"></div>
                    <div className="w-8 h-8 bg-pink-500 rounded-full m-2"></div>
                    <div className="w-8 h-8 bg-pink-500 rounded-full -mt-4"></div>
                </div>
            </div>

        
            <style jsx >{`


            `}
            </style>
        </>

        
    )
}

export default MainContent