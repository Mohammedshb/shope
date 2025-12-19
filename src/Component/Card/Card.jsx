   
import React from 'react';

  const Card = ({ card }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img
        src={card?.Image}
        alt={card?.title}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{card?.title}</h3>
        <p className="text-gray-600">{card?.category}</p>
        
      </div>
      <div className=''>
        <span className="text-xl font-bold text-[#ff6f61] ml-4">{card?.price}</span>
        {card?.discountPrice && (
          <span className="text-sm text-gray-500 line-through ml-2 capitalize">{card?.discountPrice}</span>
        )}
      </div>    

    </div>

    
  );
};
   export default Card;