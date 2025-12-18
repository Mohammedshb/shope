

// import React, { useState } from 'react'
// import { CiSearch, CiUser } from 'react-icons/ci'
// import { FaBagShopping, FaBars } from 'react-icons/fa6'
// import { IoMdClose } from 'react-icons/io'

// const Navbar = () => {
//   const [isOpen, setOpen] = useState(false)

//   const navLists = (
//     <ul className="flex flex-col xl:flex-row gap-6 xl:gap-10 text-sm xl:text-base">
//       {[
//         'jewelry & accessories',
//         'clothing & shoes',
//         'home & living',
//         'wedding & party',
//         'toys & entertainment',
//         'art & collectibles',
//         'craft supplies & tools',
//       ].map((item) => (
//         <li key={item}>
//           <a
//             href="#"
//             className="font-medium capitalize text-white xl:text-gray-800 hover:text-indigo-500 transition-colors duration-200"
//           >
//             {item}
//           </a>
//         </li>
//       ))}
//     </ul>
//   )

//   return (
//     <header className="sticky top-0 z-50 w-full bg-zinc-100/90 backdrop-blur border-b border-zinc-200">
//       <div className="container mx-auto px-4 pt-6 pb-4">

//         {/* header top */}
//         <div className="flex items-center justify-between pb-6">
//           <button className="p-2 rounded-full hover:bg-zinc-200 transition">
//             <CiSearch size="1.5rem" className="text-indigo-900" />
//           </button>

//           {/* logo */}
//           <a href="/" className="flex items-center justify-center max-w-[180px]">
//             <img src="/" alt="logo" className="h-8 object-contain" />
//           </a>

//           {/* right side */}
//           <div className="hidden sm:flex items-center gap-6">
//             <a className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition">
//               <CiUser size="1.4rem" />
//               Account
//             </a>
//             <a className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition">
//               <FaBagShopping size="1.4rem" />
//               Shopping
//             </a>
//             <button
//               onClick={() => setOpen(true)}
//               className="xl:hidden p-2 rounded-full hover:bg-zinc-200 transition"
//             >
//               <FaBars size="1.4rem" className="text-indigo-900" />
//             </button>
//           </div>
//         </div>

//         {/* desktop nav */}
//         <nav className="hidden xl:flex justify-center pt-4 border-t border-zinc-200">
//           {navLists}
//         </nav>
//       </div>

//       {/* mobile nav */}
//       <nav
//         className={`xl:hidden fixed inset-y-0 right-0 w-full max-w-87.5 bg-slate-900 px-8 py-10 flex flex-col gap-14 transform transition-transform duration-300 ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <button
//           onClick={() => setOpen(false)}
//           className="absolute top-8 right-8 text-white hover:opacity-70 transition"
//         >
//           <IoMdClose size="2rem" />
//         </button>

//         {navLists}

//         <div className="sm:hidden flex flex-col gap-6">
//           <a className="flex items-center gap-2 text-white hover:text-indigo-400 transition">
//             <CiUser size="1.4rem" />
//             Account
//           </a>
//           <a className="flex items-center gap-2 text-white hover:text-indigo-400 transition">
//             <FaBagShopping size="1.4rem" />
//             Shopping
//           </a>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import { CiSearch, CiUser } from 'react-icons/ci'
import { FaBagShopping, FaBars } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'
import logo from '../../assets/shopee.png'; // Import the image

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  const navLists = (
    <ul className="flex flex-col xl:flex-row gap-6 xl:gap-10 text-sm xl:text-base">
      {[
        'watch & accessories',
        'sport & outdoor',
        't-shirts & hoodies',
        'wedding & party',
        'shoes & sneakers',
        'nicles & rings',
        'hat & caps',
      ].map((item) => (
        <li key={item}>
          <a
            href="#"
            className="font-medium capitalize text-white xl:text-gray-800 hover:text-indigo-500 transition-colors duration-200"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  )

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-100/90 backdrop-blur border-b border-zinc-200">
      <div className="container mx-auto px-4 pt-6 pb-4 z-50">

        {/* header top */}
        <div className="flex items-center justify-between pb-6">
          <button className="p-2 rounded-full hover:bg-zinc-200 transition">
            <CiSearch size="1.5rem" className="text-indigo-900" />
          </button>

          {/* logo */}
          <a href="/" className="flex items-center justify-center max-w-[180px]">
            <img src={logo} alt="logo" className="h-25 w-25 object-cover" />
          </a>

          {/* right side */}
          <div className="hidden sm:flex items-center gap-6">
            <a className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition">
              <CiUser size="1.4rem" />
              Account
            </a>
            <a className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition">
              <FaBagShopping size="1.4rem" />
              Shopping
            </a>
            <button
              onClick={() => setOpen(true)}
              className="xl:hidden p-2 rounded-full hover:bg-zinc-200 transition"
            >
              <FaBars size="1.4rem" className="text-indigo-900" />
            </button>
          </div>
        </div>

        {/* desktop nav */}
        <nav className="hidden xl:flex justify-center pt-4 border-t border-zinc-200">
          {navLists}
        </nav>
      </div>

      {/* mobile nav */}
      <nav
        className={`xl:hidden fixed top-0 right-0 w-full max-w-[350px]
        min-h-screen overflow-y-auto
        bg-slate-900 px-8 py-10 flex flex-col gap-14
        transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-8 right-8 text-white hover:opacity-70 transition"
        >
          <IoMdClose size="2rem" />
        </button>

        {navLists}

        <div className="sm:hidden flex flex-col gap-6">
          <a className="flex items-center gap-2 text-white hover:text-indigo-400 transition">
            <CiUser size="1.4rem" />
            Account
          </a>
          <a className="flex items-center gap-2 text-white hover:text-indigo-400 transition">
            <FaBagShopping size="1.4rem" />
            Shopping
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
