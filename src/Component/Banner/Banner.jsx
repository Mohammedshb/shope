import React from 'react'
import { GiShoppingBag } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#f4f4f5] py-[100px]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">

          {/* Left */}
          <div className="flex flex-col max-w-[520px] w-full gap-8">
            <h2 className="text-7xl text-black font-light capitalize">
              collection
            </h2>

            <p className="text-3xl text-black font-light capitalize leading-[55px]">
              you can explore and shop many different collection from various brands here
            </p>

            <a
              href="#"
              className="
                max-w-[223px] w-full
                px-6 py-4
                bg-[#1e2832]
                flex items-center justify-center gap-2
                text-2xl text-white capitalize
                transition duration-300 hover:bg-black
              "
            >
              <GiShoppingBag size="1.5rem" />
              shop now
            </a>
          </div>

          {/* Right Image */}
          <div
            className="
              relative
              overflow-hidden
              aspect-[3/2]
              w-full
              max-w-[620px]
              group
            "
          >
            <img
              src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
              alt="collection"
              className="
                w-full h-full object-cover
                rounded-t-[200px] rounded-br-[200px]
                transition duration-700 ease-out
                group-hover:scale-105
              "
            />

            {/* Border */}
            <div
              className="
                absolute inset-0
                border-2 border-black
                rounded-t-[200px] rounded-br-[200px]
                translate-x-5 translate-y-5
                transition duration-700
                group-hover:translate-x-7 group-hover:translate-y-7
                pointer-events-none
              "
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner
