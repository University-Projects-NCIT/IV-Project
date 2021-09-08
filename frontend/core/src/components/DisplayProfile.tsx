import React from 'react'
import { useQuery } from 'react-query'
import {connect } from 'react-redux'
import { fetchProductsByAuthor } from '../apis/productapi'
import Link from 'next/link'
import ProductListItem from './productListItem'
import {v4 as uuidv4 } from 'uuid'


const DisplayProfile: React.FC = ({user}: any) => {

  let userId

  if(user != null)
  {
    userId = user.pk
  }

  const { data, error, isLoading } = useQuery(['productByAuthor', userId], fetchProductsByAuthor)
  
  const LoadingPage = () => {
    return (
      <React.Fragment key={uuidv4()}>
        <div className="w-full h-28 mt-4 rounded-md flex-row bg-item_list_bg justify-items-center items-center animate-pulse"></div>
      </React.Fragment>
    );
  };

  return (
		<>
			<div className="text-gray-50 mb-4"> Your Apps </div>

			{isLoading ? (
				<div className="mt-8">{[1, 2, 3, 4].map((i) => LoadingPage())}</div>
			) : typeof data == "undefined" ? (
				<div className="animate-spin w-full h-full"></div>
			) : Array.isArray(data) && data != null ? (
				data.map((itemData) => {
					return (
						<Link
							key={uuidv4()}
							href={{
								pathname: "/DetailsPage/",
								query: { id: itemData.productID },
							}}
						>
							<a>
								<ProductListItem itemData={itemData} key={uuidv4()} />
							</a>
						</Link>
					);
				})
			) : <div className="text-xl text-white">You have not posted any Apps yet.</div>}
		</>
	);
  

}

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, {})(DisplayProfile);
