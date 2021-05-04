import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const ImageCarousel: React.FC = () => {

  let defaultData = [{
      img : './images/default_image.png'
  }]
  
  let api = [
    {
      img: './images/snap1.jpeg'
    },
    {
      img: './images/snap2.jpeg'
    },
    {
      img: './images/snap3.jpeg'
    }
  ]

  const [data, setdata] = useState(defaultData);
  const [current, setCurrent] = useState(0)
  const [imgUrl, setImgUrl] = useState(data[current].img)
  
  
  const nextImage = () => {
    const index = (current + 1) % data.length;
    setCurrent(index)
    setImgUrl(data[index].img)
  }

  const previousImage = () => {
    const index = (current == 0? data.length-1 : (current - 1) % data.length);
    console.log("prev " + index)
    setCurrent(index)
    setImgUrl(data[index].img)

  }

  useEffect(() => {

    // Checking if api response if giving not 
    // Empty data or not , sets default if empty
    if (api.length !== 0)
    {
      setdata(api)

      // Display the first image to image board
      setImgUrl(api[0].img)
    }
    
  },[])

  return (
    <>
      <div className="w-full flex space-between items-center">
          <div className="text-3xl z-10 cursor-pointer" onClick={previousImage}><FaArrowAltCircleLeft /></div>
          <div className="w-full h-96 p-16  overflow-hidden flex items-center">
            <img src={imgUrl} width="100%;" className="active"/>
          </div>
          
        <div className="text-3xl z-10 cursor-pointer" onClick={nextImage}><FaArrowAltCircleRight/></div>

        </div>
        <div className=" h-14 mt-6 overflow-hidden w-full flex flex-row items-center">
          {
            data.map((img,i) => {
              return (<div key={i}><img src={img.img} className="w-28" onClick={() => setImgUrl(img.img)}></img></div>)
            })
          }
        </div>


        <style jsx>
          {`
            .slide{
              opacity: 0;
              transition-duration: 1s ease;
            }
            
            .active{
              opacity: 1;
              transition-duration: 1s;
              transform: scale(1.08);
            }
          `}
        </style>
      </>
  )
}

export default ImageCarousel