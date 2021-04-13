import React from 'react'
import BiSearchAlt from 'react-icons/bi'
import {VscSearch} from 'react-icons/vsc'

const Search: React.FC = () => {
  return (
  <>
  <div>
        <input type="text" className="input w-full md:w-2/5 bg-item_list_bg rounded-md border-none"></input>  
  </div>
      
      <style jsx>{`
        .input{
          color : #ffffff;
          padding: .2rem;
          padding-left: 1rem;
        }
        .input:focus{
            outline-offset: 0px;
        }
      `}  
    </style>
  </>
  )
}

export default Search