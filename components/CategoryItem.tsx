import React from 'react';
import Category from './Category';

type CategoryItemProps = {
  category: Category;
};
const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className='w-full rounded py-16'>
      <div className='relative'>
        <img src={category.imageUrl} alt={category.description} />
        <h2 className='absolute lg:text-3xl sm:text-xs text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold'>
          {category.label}
        </h2>
      </div>
    </div>
  );
};

export default CategoryItem;
