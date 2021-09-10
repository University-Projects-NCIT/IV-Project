import React from 'react'
import GoogleSignIn from './authentications/GoogleSignin'

const ShowMore: React.FC = () => {
  return (
    <>
      <div className="w-full p-2 sm:w-1/2 md:w-10/12 m-auto pt-4">
        <GoogleSignIn/>
      </div>

      <div>
        <h1 className="text-gray-50 pl-4"> About Us </h1>

      </div>
    </>
  )
}

export default ShowMore