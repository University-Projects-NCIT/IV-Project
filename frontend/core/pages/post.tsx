import React from 'react'
import AddProduct from '../src/components/AddProduct'

const Post: React.FC = () => {
  return (
      <div className="w-screen min-h-screen pl-8 pr-8 bg-drak_blue_background text-white overflow-hidden">
        <div className="w-full h-auto md:w-4/6 lg:w-full md:m-auto">
          <h1 className="text-2xl pt-8 mb-8">Describe about your product</h1>
          <AddProduct />
        </div>
      </div>
  )
}

export default Post