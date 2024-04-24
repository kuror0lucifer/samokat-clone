import React, { useEffect } from 'react';
import axios from 'axios';

type CategoriesItem = {
  _id: string;
  imageUrl: string;
  title: string;
};

const Categories = () => {
  const [categories, setCategories] = React.useState<CategoriesItem[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        await axios
          .get('http://localhost:4000/getCategories')
          .then(response => setCategories(response.data))
          .catch(err => console.log(err));
      } catch (err) {
        console.error('Ошибка загрузки категорий товаров: ', err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <aside className='aside-left'>
      <div className='sidebar'>
        <div className='catalog-tree'>
          {categories.map((category, index) => {
            return (
              <div className='catalog-tree__item' key={category._id}>
                <div
                  className='catalog-tree__item-img'
                  style={{ backgroundImage: `url(${category.imageUrl})` }}
                ></div>
                <span>{category.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Categories;
