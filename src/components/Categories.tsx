import React from 'react';

const categoriesItems: string[][] = [
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'На разные случаи',
  ],

  [
    'https://cm.samokat.ru/processed/category/c7f2b6e7-d1e7-4e84-8ecf-6e21506dba03.jpg',
    'От Самоката',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'Готовая еда',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'Молоко, яйца и сыр',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'Хлеб и выпечка',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'Овощи и фрукты',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'Мясо и рыба',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'Вода и напитки',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'Сладкое',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'Снеки',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'Бакалея',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'Морозилка',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'ЗОЖ и вегетарианство',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'Для детей и родителей',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'Для животных',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'Уход и личная гигиена',
  ],
  [
    'https://cm.samokat.ru/processed/category/dc3ac8bf-0029-41be-857e-13421f7fa753.jpg',
    'Для дома',
  ],
];

const Categories = () => {
  return (
    <aside className='aside-left'>
      <div className='sidebar'>
        <div className='catalog-tree'>
          {categoriesItems.map((el, index) => {
            return (
              <div className='catalog-tree__item' key={index}>
                <img src={el[0]} alt='category img' />
                <span>{el[1]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Categories;
