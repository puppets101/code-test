import React from 'react';
import CategoryItem from './CategoryItem';

type Category = {
  id: string;
  label: string;
  imageUrl: string;
  description: string;
};

const Category = () => {
  return (
    <div className='container grid grid-cols-4 gap-2 mx-auto'>
      {categories.map((category: Category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

const categories: Category[] = [
  {
    id: '1',
    label: 'MAN',
    imageUrl:
      'https://images.unsplash.com/photo-1489913590284-9269438bb411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: 'Kategori',
  },
  {
    id: '2',
    label: 'TJEJ',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1663047595724-cd5baf9cbcf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: 'Kategori',
  },
  {
    id: '3',
    label: 'NYHETER',
    imageUrl:
      'https://images.unsplash.com/photo-1445108771252-d1cc31a02a3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
    description: 'Kategori',
  },
  {
    id: '4',
    label: 'OM VARG',
    imageUrl:
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: 'Kategori',
  },
];

export default Category;