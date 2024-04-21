import React from 'react';
import Categories from './Categories';
import WorkingHours from './WorkingHours';

const currentHours: Date = new Date();
const offHours: number[] = [23, 0, 1, 2, 3, 4, 5, 6, 7];

const Home: React.FC = () => {
  return (
    <section className='section'>
      <Categories />
      {offHours.includes(currentHours.getHours()) ? <WorkingHours /> : ''}
    </section>
  );
};

export default Home;
