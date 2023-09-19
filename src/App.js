import { Fragment, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

const App = () => {
  const [currentText, setCurrentText] = useState('');
  const textChangeHandler = (text) => {
    setCurrentText(text.toLowerCase());
  };

  return (
    <Fragment>
      <SearchBar onInput={textChangeHandler}/>
      <Results currentText={currentText}/>
    </Fragment>
  );
};

export default App;
