import React, { useState } from "react";
import { ProductCommentData, UserInterface } from '../../interfaces/Interfaces'
import { ProductIdContext } from '../../Contexts/Context'
import { useMutation, useQueryClient } from 'react-query'
import { addComment, fetchCommentByProductId } from '../../apis/productapi'
import { connect } from 'react-redux'
import { useQuery } from "react-query";
import Comment from './Comment'

interface postComment {
		product: string;
		comment: string;
		author: Number;
}
	

interface PropsInterface {
	id: String
	user: UserInterface;
	isAuthenticated: Boolean;
}

const ProductComment: React.FC<PropsInterface> = ({ id, user, isAuthenticated } :any) => {



	
	const queryClient = useQueryClient()


	const mutateComment = useMutation(addComment, {
		onSuccess: () => {
			queryClient.invalidateQueries("fetchComment")

		},
		onError : (error) => console.log(error, "comment add error ")
	})

	const { data, error, isLoading } = useQuery(["fetchComment", id], fetchCommentByProductId)
	

	const commentData: postComment= {
		comment: "",
		author: user.pk,
		product: id,
	}

	const [formData, setFormData] = useState(commentData)


	const onChangeTextArea = (event) =>
	{
		setFormData({...formData ,[event.target.name]: event.target.value})
	}



	const onSubmitComment = () => {
		console.log(formData, "from data ")

		if (formData.comment == "") {
			alert("empty comment ")
			return
		} else {
			mutateComment.mutate(formData)
			setFormData({...formData, comment: ""})
		}

	}


	return (
		<>
			<div className="bg-item_list_bg rounded-sm p-4 w-full md:w-8/12">
				{/* textarea */}
				<div>
					<textarea
						cols={10}
						rows={8}
						onChange={onChangeTextArea}
						value={formData.comment}
						name= "comment"
						className="bg-drak_blue_background w-full rounded-md p-2 
					 text-sm border border-gray-600 focus:ring-2  focus:ring-blue-600 
					 focus:outline-none focus:border-transparent"
						placeholder="Leave a comment"
					></textarea>
					<div className="flex justify-end mt-2">
						<button onClick={onSubmitComment}
							className="bg-buttonGreen px-5 py-2 text-sm rounded-md 
						focus:outline-none focus:border-transparent"
						>
							Comment
						</button>
					</div>
				</div>

				{/* comments */}
				<div>
					{
						Array.isArray(data) ? (
							data.map((comment) => {
								return (<Comment data = {comment} key={comment.id}/>)
							})
						) : null
					}
				</div>
			</div>

			{/* <style jsx>
				{`
					.btn-bg-green {
						background-color: rgba(34, 132, 53, 0.6);
					}
				`}
			</style> */}
		</>
	);
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(ProductComment);
