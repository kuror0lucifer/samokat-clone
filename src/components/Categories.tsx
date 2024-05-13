import React from 'react';
import axios from 'axios';

type CategoriesItem = {
  _id: string;
  imageUrl: string;
  title: string;
  subcategories: string[];
};

const Categories = () => {
  const [categories, setCategories] = React.useState<CategoriesItem[]>([]);
  const [showSubcategories, setShowSubcategories] = React.useState({});

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        await axios
          .get('http://localhost:4000/getCategories')
          .then(res => setCategories(res.data))
          .catch(err => console.log(err));
      } catch (err) {
        console.error('Ошибка загрузки категорий товаров: ', err);
      }
    };
    fetchCategories();
  }, []);

  const onClickCategory = categoryId => {
    setShowSubcategories(prevState => ({
      ...prevState,
      [categoryId]: !prevState[categoryId],
    }));
  };

  return (
    <aside className='aside-left'>
      <div className='sidebar'>
        <div className='catalog-tree'>
          {categories.map(category => (
            <>
              <div className='catalog-tree__item' key={category._id}>
                <div
                  className='catalog-tree__item-img'
                  style={{ backgroundImage: `url(${category.imageUrl})` }}
                ></div>
                <span className='catalog-tree__item-text'>
                  {category.title}
                </span>
                <div
                  className='clickable-overlay'
                  onClick={() => onClickCategory(category._id)}
                ></div>
              </div>
              <div>
                {showSubcategories[category._id] && (
                  <div
                    className='catalog-tree__subcategories'
                    key={category._id}
                  >
                    {category.subcategories.map((subcategory, index) => (
                      <a href='##' key={`${category._id}-${index}`}>
                        <span>{subcategory}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Categories;
