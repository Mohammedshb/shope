import React from 'react';
import follower1 from './../../assets/istockphoto-ho.jpg';
import follower2 from './../../assets/isImage.jpg';
import follower3 from './../../assets/Alphacombo.jpg';
import follower4 from './../../assets/tmtImage.jpg';
import follower5 from './../../assets/pexels-yugdas.jpg';


const followers = [
   {
    image: follower1
   },
    {
    image: follower2
   },
    {
    image: follower3
   },
    {
    image: follower3
   },
    {
    image: follower4
   },
    {
    image: follower5
   },
]


function Follow() {
  return (
    <div className='w-full bg-[#f4f4f6] flex items-center justify-center py-[100px] px-4 '>
      <div className="container">
        {/* Follow Section */}
        <div className='flex items-center justify-center mb-10'>
          <h2 className="sm:text-4xl text-3xl text-black font-medium capitalize tracking-wide">
            Follow products and discounts on instagram
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-6  mb-10 md:mb-14">
          {
              followers.map((fol, inx)=> (
                 <img src={fol?.image} alt={inx} key={inx}/>
              ))
          }
        </div>

          <div className="flex flex-col items-center justify-center w-full gap-10">
          <h2 className="sm:text-3xl text-2xl text-black font-medium capitalize tracking-wide">
            Or Subscribe to the newsletter
          </h2>
           <form action="#" className='flex items-center gap-6 max-w-[763px] w-full'>
            <input className='max-w-[643px] w-full h-[32px] border-b-2 border-[#1e2832] outline-0'  type="email" placeholder="Enter your email"/>
            <button className='min-w-[93px] w-full h-[32px]  border-b-2 border-[#1e2832] outline-0 text-[#1e2832] text-base font-normal uppercase cursor-pointer' type="submit">submit</button>
         </form>

          </div>


         
      </div>

    </div>
  );
};

export default Follow