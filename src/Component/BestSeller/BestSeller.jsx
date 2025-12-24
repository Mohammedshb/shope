import React, { useState } from 'react'
import Card from '../Card/Card';


import pexelsAnthony from '../../assets/pexels-anthony.jpg';
import pexelsAnna from '../../assets/pexels-anna.jpg';
import pexelsMnzoutf from '../../assets/pexels-mnzoutf.jpg';
import pexelsPixabay from '../../assets/pexels-pixabay.jpg';
import pexelsYugdas from '../../assets/pexels-yugdas.jpg';
import pexelsSport from '../../assets/pexels-sport.jpg';
import MH from '../../assets/MH.jpg';
import  blankHoodies from '../../assets/blank-hoodies.jpg';
import  humanHo from '../../assets/human-ho.jpg';
import  istockphotoHo from '../../assets/istockphoto-ho.jpg';
import  tmtImage from '../../assets/tmtImage.jpg';
import   isImage from '../../assets/isImage.jpg';
import   Alphacombo from '../../assets/Alphacombo.jpg';
import  jacket1 from '../../assets/jacket1.jpg';
import  BH from '../../assets/BH.jpg';
import  mensLeather from '../../assets/mens_leather.jpg';




function Bestseller() {
 
  
 const products = [
    {
      Image: pexelsAnthony,
      title: 'brown watche',
      category: 'Watches',
      price: '$99.99',
    },
    {
      Image: pexelsAnna,
      title: 'Black T-Shirt',
      category: 'T_Shirts',
      price: '$59.99',
    },
    {
      Image: pexelsMnzoutf,
      title: 'shoe',
      category: 'shoes',
      price: '$44.99',
    },
    {
      Image: pexelsPixabay,
      title: 'fancy shoe',
      category: 'shoes',
      price: '$66.99',
    },
    {
      Image: pexelsYugdas,
      title: 'gray watche',
      category: 'Watches',
      price: '$88.99',
    },
    {
      Image: pexelsSport,
      title: 'sport shoe',
      category: 'shoes',
      price: '$111.99',
      discountPrice: '$20.99',
    },
    {
      Image: MH,
      title: 'purple hoodie',
      category: 'Hoodies',
      price: '$99.99',
    },
     {
      Image: blankHoodies,
      title: 'blank hoodie',
      category: 'Hoodies',
      price: '$79.99',
    },
    {
      Image: blankHoodies,
      title: 'blank hoodie',
      category: 'Hoodies',
      price: '$79.99',
    },
    {
      Image: humanHo,
      title: 'human hoodie',
      category: 'Hoodies',
      price: '$79.99',
    },
    {
      Image: istockphotoHo,
      title: 'istockphoto hoodie',
      category: 'Hoodies',
      price: '$79.99',
    },
    {
      Image: tmtImage,
      title: 'men accessory',
      category: 'Accessories',
      price: '$79.99',
    },
    {
      Image: isImage,
      title: 'men accessory',
      category: 'Accessories',
      price: '$79.99',
    },
     {
      Image: Alphacombo,
      title: 'men accessory',
      category: 'Accessories',
      price: '$79.99',
    },
     {
      Image: BH,
      title: 'jacket',
      category: 'Jackets',
      price: '$129.99',
    },
     {
      Image: jacket1,
      title: 'jacket',
      category: 'Jackets',
      price: '$100.99',
    },
     {
      Image: mensLeather,
      title: 'Leather jacket',
      category: 'Jackets',
      price: '$129.99',
    },

  ];
  
  const categories = [
    'All Products',
    'T_Shirts',
    'Hoodies',
    'Jackets',
    'shoes',
    'Accessories',
    'Watches',
  ];

 const [selectedCategory, setCategory] = useState('All Products');
 const [showAll, setShowAll] = useState(false);

  const filteredProducts =
    selectedCategory === 'All Products'
      ? ( showAll ? products.slice(0,4) : products)
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="w-full flex items-center justify-center bg-white px-4 py-[140px]">
      <div className="container mx-auto">
        {/* Title */}
        <div className="flex items-center justify-center mb-10">
          <h2 className="sm:text-4xl text-3xl text-black font-normal uppercase tracking-wide">
            Best Seller
          </h2>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4 md:gap-6 flex-wrap md:flex-nowrap">
            {categories.map((cate, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.preventDefault(); // 🔴 يمنع scroll للأعلى
                  setCategory(cate);
                }}
                className={`text-base font-semibold capitalize cursor-pointer transition
                  ${
                    selectedCategory === cate
                      ? 'text-[#ff6f61]'
                      : 'text-black'
                  }`}
              >
                {cate}
              </button>
            ))}
          </div>

          {/* Filter Button (بدون scroll={false}) */}
          <button onClick={() => setShowAll(!showAll)}
            type="button"
            className="px-4 py-1.5 bg-[#1e2832] text-white flex items-center gap-2"
          >
            
            Show all
          </button>
        </div>

        {/* Products */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {filteredProducts.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bestseller