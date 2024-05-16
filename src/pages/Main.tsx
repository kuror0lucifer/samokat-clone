import React from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

type MainCategoriesItem = {
  _id: string;
  imageUrl: string;
  title: string;
  subcategories: {
    subcategoryImg: string;
    title: string;
    _id: string;
  }[];
};

const Main: React.FC = () => {
  const [mainCategories, setMainCategories] = React.useState<
    MainCategoriesItem[]
  >([]);

  React.useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        await axios
          .get('http://localhost:4000/getCategories')
          .then(res => setMainCategories(res.data))
          .catch(err => console.log(err));
      } catch (err) {
        console.error('Ошибка загрузки категорий товаров: ', err);
      }
    };
    fetchMainCategories();
  }, []);

  return (
    <>
      <main className='main'>
        <div className='main__wrapper'>
          {/* <div className='main__wrapper-border'></div> */}
        </div>

        <div className='main__container'>
          <div className='text__container'>
            <span className='main__container-text'>Доставка</span>&nbsp;
            <span className='main__container-text'>от 15 минут</span>
          </div>

          {mainCategories.map(categories => {
            return (
              <>
                <span className='card__title'>{categories.title}</span>
                <div className='card'>
                  {categories.subcategories.map(subcategory => {
                    return (
                      <a href='##' key={subcategory._id}>
                        <div className='card-block'>
                          <span className='card-block-text'>
                            {subcategory.title}
                          </span>
                          <div className='card__container'>
                            <div className='card__container-img'>
                              <img
                                src={subcategory.subcategoryImg}
                                alt={subcategory.title}
                                loading='lazy'
                              />
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Main;
