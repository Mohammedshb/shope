// import React from 'react'

// function Collection() {
//   return (
//     <div className='w-full min-h-[776px] h-full flex items-center justify-center px-4 bg-[#010204] relative'>
//       <div className="container">
//          <div className="flex justify-end items-end">
//            <div className="flex flex-col gap-6 max-w-[510px] w-full">
//                 <h2 className='text-8xl text-white font-semibold uppercase opacity-65'>Nike</h2>
//                 <p className='text-2xl text-white font-normal capitalize leading-10 '>Nike only men choice for every year and every day </p>
//                 <a href="#" className='max-w-[237px] w-full h-[72px] bg-white text-3xl text-[#1e2832] font-normal capitalize flex items-center justify-center'>See The Collection</a>
//            </div>
//          </div>
//       </div>
//       <div className="absolute left-0 top-0 max-w=[1000px] w-full h-full ">
//         <img className='w-full h-full object-cover opacity-60' src="https://images.pexels.com/photos/3081173/pexels-photo-3081173.jpeg" alt="collection" />
//       </div>
//       <div className="absolute right-0 top-0 max-w=[732px] max-h-[302px] w-full h-full ">
//         <img className='w-full h-full object-cover opacity-60' src="https://static.vecteezy.com/system/resources/previews/010/994/236/non_2x/nike-logo-white-with-name-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg" alt="collection11" />
//       </div>
//     </div>
//   )
// }

// export default Collection;
import React from 'react';

function Collection() {
  return (
    <div className="w-full min-h-[776px] h-full flex items-center justify-center px-4 bg-[#010204] relative">
      
      {/* محتوى النصوص */}
      <div className="container relative z-10">
        <div className="flex justify-end items-end">
          <div className="flex flex-col gap-6 max-w-[510px] w-full">
            <h2 className="text-8xl text-white font-semibold uppercase opacity-60">
              Nike
            </h2>
            <p className="text-2xl text-white font-normal capitalize leading-10 cursor-pointer">
              Nike only men choice for every year and every day
            </p>
            <a
              href="#"
              className="max-w-[237px] w-full h-[72px] cursor-pointer bg-white text-3xl text-[#1e2832] font-normal capitalize flex items-center justify-center hover:bg-gray-200 transition"
            >
              See The Collection
            </a>
          </div>
        </div>
      </div>

      {/* صورة الخلفية الأساسية */}
      <div className="absolute left-0 top-0 w-full h-full max-w-[1000px]">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://images.pexels.com/photos/3081173/pexels-photo-3081173.jpeg"
          alt="collection"
        />
      </div>

      {/* شعار إضافي */}
      <div className="absolute right-0 top-0 w-full h-full max-w-[732px] max-h-[302px]">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://static.vecteezy.com/system/resources/previews/010/994/236/non_2x/nike-logo-white-with-name-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg"
          alt="collection-logo"
        />
      </div>
    </div>
  );
}

export default Collection;
