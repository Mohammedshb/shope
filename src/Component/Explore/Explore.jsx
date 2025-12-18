import React from 'react'

function Explore() {
  return (
    <div className="w-full bg-white flex items-center justify-center px-4">
  <div className="grid grid-cols-4 grid-rows-2 gap-6 max-w-7xl w-full">

    {/* الصورة الكبيرة */}
    <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl">
      <img
        src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    {/* صورة 1 */}
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    {/* صورة 2 */}
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    {/* صورة 3 */}
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    {/* صورة 4 */}
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>

  )
}

export default Explore