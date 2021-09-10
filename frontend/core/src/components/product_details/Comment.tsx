import React from 'react'
import { useQuery } from 'react-query'
import { fetchUserByID } from '../../apis/productapi'
import { ProductCommentData, ProductCommentInterface , UserInterface} from '../../interfaces/Interfaces'

interface propsInterface {
  data : ProductCommentInterface
}

interface User{
  data : UserInterface
}
const Comment: React.FC<propsInterface> = ({ data }) => {
  


  const userData : User = useQuery(["fetchAuthor", data.author], fetchUserByID)
  
                
  return (
    <>        
        {
          userData.data != null ?
          <div className="flex flex-row items-center mb-6 mt-2">
            <div className="mr-4 self-start mt-1 bg-red-500 w-8">
              {
                  userData.data.ProfileImage != null && typeof userData.data.ProfileImage != 'undefined' ?
                    ( 
                        <img
                        src={ userData.data.ProfileImage[0].imageUrl}
                        alt="avatar"
                        className="rounded-full"
                      />   
                    )
                  : null
              }
      
            </div>
            <div className="text-sm w-5/6">
              <h4 className="font-semibold">{userData.data.first_name}</h4>
              <p>{data.comment}</p>
            </div>
          </div> : null
        }

    </>
  )
}

export default Comment