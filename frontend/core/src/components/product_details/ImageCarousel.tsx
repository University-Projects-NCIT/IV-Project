import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const ImageCarousel: React.FC = () => {
  const data = [
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
  
  const [current, setCurrent] = useState(0)

  const length = data.length;
  // console.log(length);

  const nextImage = () => {
    setCurrent(current === length-1 ? 0 : current + 1);
  }

  const previousImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  
  console.log(current);

  return (
    <>
    <div className="flex  items-center justify-center relative">
      <FaArrowAltCircleLeft  className="absolute top-2/4 left-8 text-3xl z-10 cursor-pointer" onClick={previousImage}/>
      <FaArrowAltCircleRight className="absolute top-2/4 right-8 text-3xl z-10 cursor-pointer" onClick={nextImage}/>
      {data.map(({ img }, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && ( <img src={img} alt="screenshots" className="w-3/4 rounded"  />)}
          </div>
         
        )
       })}
      </div>

      <style jsx>
        {`
           .slide{
             opacity: 0;
             transition-duration: 1s ease;
           }
           
           .slide.active{
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