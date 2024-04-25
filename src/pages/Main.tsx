import React from 'react';
import axios from 'axios';

type MainCategoriesItem = {
  _id: string;
  imageUrl: string;
  title: string;
};

const Main: React.FC = () => {
  const [mainCategories, setMainCategories] = React.useState<
    MainCategoriesItem[]
  >([]);

  React.useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        await axios
          .get('http://localhost:4000/getMainCategories')
          .then(res => setMainCategories(res.data))
          .catch(err => console.log(err));
      } catch (err) {
        console.error('Ошибка загрузки категорий товаров: ', err);
      }
    };
    fetchMainCategories();
  }, []);

  return (
    <main className='main'>
      <div className='main__wrapper'></div>

      <div className='main__container'>
        <div className='text__container'>
          <span className='main__container-text'>Доставка</span>&nbsp;
          <span className='main__container-text'>от 15 минут</span>
        </div>
        <div className='card'>
          {mainCategories.map(categories => {
            return (
              <a href='##' key={categories._id}>
                <div className='card-block'>
                  <span className='card-block-text'>{categories.title}</span>
                  <div className='card__container'>
                    <div className='card__container-img'>
                      <img src={categories.imageUrl} alt={categories.title} />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
