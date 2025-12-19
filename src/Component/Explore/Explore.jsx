import React from 'react'

function Explore() {
  return (
   
  <div className="w-full bg-white px-4 py-16">

  {/* Section Title */}
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-900">
      Explore Our Collection
    </h2>
    <p className="mt-3 text-gray-500 text-sm md:text-base">
      Discover the latest trends curated just for you
    </p>
  </div>

  {/* Images Grid */}
  <div className="flex items-center justify-center">
    <div className="grid grid-cols-4 grid-rows-2 gap-6 max-w-7xl w-full">

      {/* Large Image */}
      <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105">
        <img
          src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Small Images */}
      <div className="relative overflow-hidden rounded-2xl   transition-transform duration-300 hover:scale-105">
        <img
          src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative overflow-hidden rounded-2xl  transition-transform duration-300 hover:scale-105">
        <img
          src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative overflow-hidden rounded-2xl   transition-transform duration-300 hover:scale-105">
        <img
          src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative overflow-hidden rounded-2xl  transition-transform duration-300 hover:scale-105">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>

</div>


  );
};

export default Explore