import React ,{ useState } from 'react';
import { ProductInterface } from '../Interfaces'
import {BsFillTriangleFill} from 'react-icons/bs'

const ProductListItem: React.FC = (props) =>{
    
    /**
     * @returns the each single product list 
     */

    const initialValue = {
        title: "Instagram App",
        tagline: "The way to share your photo to the world .",
        category: ["IOS","Android","Wesite"]
    }

    const [upvote, setUpvote] = useState(345)

    const [data, setData] = useState<ProductInterface>(initialValue)
    return (
        <>
            <div className="w-full bg-item_list_bg text-gray-100 flex flex-col hover:opacity-70"> 
                <div className="flex pt-4 pb-4">
                    <div className="w-16 h-16 mt-2 ml-4 mr-4">
                        <img src = "./images/snapchat.png" alt="product image logo"/>
                    </div>
                    <div className="">
                        <h4 className="mt-1">{data.title}</h4>
                        <p className="text-xs mt-1 text-gray-300">{data.tagline}</p>
                        <div className="flex flex-start mt-2">
                            {data.category.map( item => {
                            return <p className ="category m-1 uppercase" key={item}>{item}</p>
                            })}
                        </div>
                    </div>
                    <div className="w-16 h-16 bg-color7 ml-auto hover:opacity-70 mr-4 rounded-lg flex flex-col items-center justify-center">
                        <div><BsFillTriangleFill className="color-black"/></div>
                        <div>{upvote}</div>
                    </div>
                </div>
                <div className="line"></div>
            </div>

            <style jsx>{`

            .line{
                width: 100%;
                height: .5px;
                background : linear-gradient(to right,
                    #2F80ED,
                    #98459B,
                    #F1239F                   
                );
            }

            .category{
                color: #F39912;
                font-size: .5em;
            }
            `}
            </style>
        </>
    )
}

export default ProductListItem