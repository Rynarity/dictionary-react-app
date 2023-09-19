import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import { arrayOfWords } from '../assets/dictionary.js';
import ResultList from './ResultList';

const Results = (props) => {
  const [wordList, setWordList] = useState([]);
  const currentText = props.currentText;

  useEffect(() => {
    setWordList(arrayOfWords.filter((item) => item.startsWith(currentText)));
  }, [currentText]);

  return (
    <Card>
      {wordList.map((item) => (
        <ResultList key={item} word={item} />
      ))}
    </Card>
  );
};

export default Results;
