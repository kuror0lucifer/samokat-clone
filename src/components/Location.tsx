import React from 'react';

const Location: React.FC = () => {
  return (
    <aside className='location'>
      <div className='sidebar'>
        <div className='addressConfirm'>
          <h3 className='addressConfirm__title'>Ваш город Москва?</h3>
          <p className='addressConfirm__text'>
            Цены и акции могут отличаться в зависимости от расположения
          </p>
          <div className='buttons'>
            <button className='confirm-button'>Верно</button>
            <button className='confirm-button'>Выбрать другой</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Location;
