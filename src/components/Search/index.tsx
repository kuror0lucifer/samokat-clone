import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';

import styles from './Search.module.scss';

const Search: React.FC = () => {
  const [value, setValue] = React.useState('');

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClickClear = () => {
    setValue('');
  };

  return (
    <div className={styles.root}>
      <FaSearch className={styles.searchIcon} />
      <input
        className={styles.input}
        placeholder='Искать в Самокате'
        onChange={onChangeInput}
        value={value}
      />
      {value && <MdClear onClick={onClickClear} className={styles.clearIcon} />}
    </div>
  );
};

export default Search;
