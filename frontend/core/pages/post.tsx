import React from 'react'

const Post: React.FC = () => {
  return (
    <>
      <div className="w-screen min-h-screen bg-drak_blue_background text-white">
        <div className="bg-red-500 w-full h-auto sm:w-4/5 md:w-3/4 lg:w-1/2 m-auto p-4 mainForm flex flex-col space-y-4">
          <div>
            <h1>Describe about your product</h1>
          </div>
          <label htmlFor="title" className="block">Enter the title </label>
          <input type = "text" id="title" className="bg-item_list_bg focus:outline-none text-gray-300 h-10" ></input>
        </div>
      </div>
    </>
  )
}

export default Post