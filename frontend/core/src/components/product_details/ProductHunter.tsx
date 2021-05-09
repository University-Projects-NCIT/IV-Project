import React, {useState} from 'react';


const ProductHunter: React.FC = () => {
  const initialValue = [
    {
      name: 'Grishmin Karki',
      position: 'Frontend developer',
      avatar: './images/michaeljackson.jpg'
    },
    {
      name: 'Jeevan Rupacha',
      position: 'Full-stack developer',
      avatar: './images/michaeljackson.jpg'
    }
  ]
 
  const [makers, setMakers] = useState(initialValue);

  return (
    <div className="bg-item_list_bg text-white text-sm p-4 rounded-sm">
      <div>
        <h3 className="text-xs">MAKERS</h3>
      </div>

      <div>
        {makers.map(({ name, position, avatar }) => {
          return (
            <div className="flex py-3 space-x-3">
              <div>
                 <img src={avatar} alt="avatar" className="rounded-full w-10"/>
              </div>
             
              <div>
              <h1 className="text-sm font-semibold hover:text-gray-300 cursor-pointer">{name}</h1>
              <p className="text-xs">{position}</p>
              </div>
              
              </div>
            )
          })}
      </div>
    </div>
  )
};

export default ProductHunter;