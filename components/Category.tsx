import React, { FC } from 'react';
import { Category } from '../interfaces';
import { categories } from '../utils/category-data';
import CategoryItem from './CategoryItem';

const Category: FC = () => {
  return (
    <div className='lg:container  grid grid-cols-4 lg:gap-2 gap-1 mx-auto'>
      {categories.map((category: Category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Category;
