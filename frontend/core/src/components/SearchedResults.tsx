import React from 'react'
import { useQuery } from 'react-query'
import { fetchSearchProducts } from '../productapi'
import { NEWEST, POPULAR } from '../constraints'
import { v4 as uuidv4 } from 'uuid'
import ProductListCard from './ProductListCard'

interface PropsInterface {
  search_key : string
}

const SearchedResults: React.FC<PropsInterface> = (props) => {

  const [productOrderBy, setProductOrderBy] = React.useState(NEWEST)

  
  const {data,error,isLoading,isError,isFetching} = useQuery(['search_products', productOrderBy, props.search_key],
    fetchSearchProducts,
    {
      refetchOnWindowFocus: false,
    })

  const resultNotFound = () => {
    return (
      <React.Fragment>
        <div>
          {/* <h1 className="text-red-500 text-lg text-align-center mt-8 flex flex-row justify-items-center items-center">Search not found </h1> */}
          <img src="./images/undraw_searching_p5ux.svg" className="h-1/2 w-3/4 md:h-96 md:w-96 pl-12 pr-12 pb-12 items-center"></img>
        </div>
      </React.Fragment>
    )
  }

  const LoadingPage = () => {
		return (
			<React.Fragment>
				<div className="w-full h-28 mt-2 mb-2 rounded-md flex-row bg-item_list_bg justify-items-center items-center animate-pulse">
				</div>
			</React.Fragment>
		)
  }
  
  console.log(data)
  
  return (
    <>
      <div className="flex flex-row text-white justify-end -mb-4">
							<button className="pl-2 pr-2 pt-1 btn bg-color4 opacity-60 hover:opacity-70" onClick={()=> setProductOrderBy(POPULAR)}>
								Popular
							</button>
							<div className="line"></div>
							<button className="pl-2 pr-2 pt-1 btn bg-color4 opacity-60 hover:opacity-70" onClick={()=> setProductOrderBy(NEWEST)}>
                Newest
							</button>
        </div>
      <h1 className="text-gray-300">Results</h1>
      {
        isLoading || isFetching ? [1,2,3,4].map( i => LoadingPage()):
          typeof data == "undefined" ? <div className="animate-spin w-full h-full"></div> :
          typeof data != "undefined" && data.length != 0 ? <ProductListCard data={data} displayDate={false} /> :
          resultNotFound()
      }
      
      
      <style jsx>{`
      	.btn {
						border: none;
						outline: none;
					}

					.line {
						width: 3px;
						height: 100%;
						background: linear-gradient(#2f80ed, #ec1616);
					}
      `}</style>
  </>    
  )
}

export default SearchedResults