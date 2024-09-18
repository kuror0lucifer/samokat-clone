import React from "react";

const Location: React.FC = () => {
  return (
    <aside className="location">
      <div className="sidebar">
        <div className="address-confirm">
          <h3 className="address-confirm__title">Ваш город Москва?</h3>
          <p className="address-confirm__text">
            Товары и акции зависят от адреса
          </p>
          <div className="buttons">
            <button className="confirm-button">Да, верно</button>
            <button className="confirm-button">Нет, другой</button>
          </div>
        </div>
        <div className="map__container">
          <div className="map"></div>
        </div>
      </div>
    </aside>
  );
};

export default React.memo(Location);
