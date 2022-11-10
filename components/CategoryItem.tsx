import React, { useState } from 'react';
import Category from './Category';

type CategoryItemProps = {
  category: Category;
};
const CategoryItem = ({ category }: CategoryItemProps) => {
  const [showBorder, setShowBorder] = useState(false);
  console.log(showBorder);

  return (
    <div
      className='w-full rounded py-16'
      onMouseOver={() => setShowBorder(true)}
      onMouseOut={() => setShowBorder(false)}
    >
      <div className='relative hover:-translate-y-6 duration-200 ease-in'>
        <img src={category.imageUrl} alt={category.description} />

        <h2
          className={`${
            showBorder
              ? 'absolute lg:text-xl text-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 lg:font-bold lg:px-10 lg:py-2 lg:border-4 border-orange-500 lg:duration-700'
              : 'absolute lg:text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:font-bold lg:duration-700'
          }`}
        >
          {category.label}
        </h2>
      </div>
    </div>
  );
};

export default CategoryItem;
