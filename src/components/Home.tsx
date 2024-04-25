import React from 'react';
import Categories from './Categories';
import WorkingHours from './WorkingHours';
import Main from '../pages/Main';
import Location from './Location';

const currentHours: Date = new Date();
const offHours: number[] = [23, 0, 1, 2, 3, 4, 5, 6, 7];

const Home: React.FC = () => {
  console.log(currentHours.getHours());
  return (
    <section className='section'>
      <Categories />
      <div className='section__container'>
        {offHours.includes(currentHours.getHours()) ? <WorkingHours /> : ''}
        <Main />
      </div>
      <Location />
    </section>
  );
};

export default Home;
