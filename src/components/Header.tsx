import React from 'react';
import Search from './Search';
import logo from '../assets/header__logo.svg';

const Header: React.FC = () => {
  return (
    <header className='header'>
      {<img src={logo} alt='header_logo' className='header__logo' />}
      <Search />
      <button className='header__button-login'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16.8576 13.4205C16.4079 13.2405 15.9032 13.3793 15.5427 13.7027C14.5754 14.5705 13.3608 15.1999 12 15.1999C10.6392 15.1999 9.42462 14.5705 8.45732 13.7027C8.09676 13.3793 7.59209 13.2405 7.14241 13.4205C5.46573 14.0919 4 14.9727 4 15.9999C4 18.3999 6.4 21.5999 12 21.5999C17.6 21.5999 20 18.3999 20 15.9999C20 14.9727 18.5343 14.0919 16.8576 13.4205Z'
            fill='currentColor'
          ></path>
          <path
            d='M16.8 7.2999C16.8 10.3927 14.4 13.5999 12 13.5999C9.59995 13.5999 7.19995 10.3927 7.19995 7.2999C7.19995 4.20711 9.34898 2.3999 12 2.3999C14.6509 2.3999 16.8 4.20711 16.8 7.2999Z'
            fill='currentColor'
          ></path>
        </svg>
        <span>Войти</span>
      </button>
    </header>
  );
};

export default Header;
