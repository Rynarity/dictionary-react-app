import React from 'react';
import Card from '../UI/Card';
import './SearchBar.css';

const SearchBar = (props) => {
  const onChangeHandler = (event) => {
    event.preventDefault();
    props.onInput(event.target.value);
  };
  return (
    <Card>
      <input type='text' className='search' onChange={onChangeHandler} />
    </Card>
  );
};

export default SearchBar;
