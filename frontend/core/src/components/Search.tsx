import React from 'react'
import BiSearchAlt from 'react-icons/bi'
import {VscSearch} from 'react-icons/vsc'

const Search: React.FC = () => {
  return (
  <>
  <div className="flex flex-row">
        <input type="text" className="input w-full md:w-2/5 bg-item_list_bg rounded-md border-none"></input>
        <VscSearch className="-ml-8 mt-1"/>
  </div>
      
      <style jsx>{`
        .input{
          color : #ffffff;
          padding: .2rem;
          padding-left: 1rem;
          -webkit-transition: box-shadow 0.3s;
          transition: box-shadow 0.3s;
        }
        .input:focus{
            outline-offset: 0px;
            outline: none;
            box-shadow: 1px 0.3px 9px .1px #111E6C;
        }
      `}  
    </style>
  </>
  )
}

export default Search