import React from 'react'
import { ProductInterface } from '../Interfaces'

const UpcommingItemList: React.FC = () => {
  
  const initialValue = {
        title: "Snapchat Android app",
        tagline: "The way to share your photo to the world The way to share your photo to the world .",
        category: ["IOS","Android","Wesite"]
    }

  return (
    <>
      <div className="w-full h-auto bg-color5 text-xs pl-4 pb-2">
        <div className="flex flex-row w-full justify-between">
          <div>
            <div className="pt-2 text-gray-50 text-sm">{initialValue.title}</div>
            <div className="text-xs text-gray-300 mt-1">{initialValue.tagline}</div>
          </div>
          <div className="m-2 mt-3 w-12 h-12"><img src="./images/snapchat.png" className="w-full h-full"></img></div>
        </div>
        <div className=""><button className="outline-none border-none focus:outline-none hover:opacity-70 bg-color6 text-xs pl-1 pr-1 mb-2 text-gray-50 rounded-full">Subscribe</button></div>
        <div className="text-gray-50 flex justify-end mr-2">20-3-2021 </div>
      </div>
    </>
  )
}

export default UpcommingItemList