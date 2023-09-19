import React, { useReducer, useState } from 'react';
import './ResultList.css';
import { dictionaryCall } from '../api/api';
import Modal from '../UI/Modal';

const INITIAL_STATE = {
  definitions: [],
  examples: [],
};

const wordDataReducer = (state, action) => {
  if (action.type === 'FETCH') {
    const definitions = action.data.meanings[0].definitions.map(
      (definition) => definition.definition
    );
    const examples = action.data.meanings[0].definitions.map(
      (definition) => definition.example
    );
    return { definitions: definitions, examples: examples };
  }
  return INITIAL_STATE;
};

const ResultList = (props) => {
  const [state, dispatch] = useReducer(wordDataReducer, INITIAL_STATE);

  const [wordClicked, setIsWordClicked] = useState(false);

  const clickedWordHandler = async (event) => {
    const word = event.target.textContent;
    const call = await dictionaryCall(word);
    const response = call.data[0];

    dispatch({ type: 'FETCH', data: response });
    setIsWordClicked(true);
  };

  const isWordClickedClose = () => {
    setIsWordClicked(false);
  };

  return (
    <div>
      {wordClicked && (
        <Modal word={props.word} onClose={isWordClickedClose} data={state} />
      )}

      <div id={props.word} className='result' onClick={clickedWordHandler}>
        {props.word}
      </div>
    </div>
  );
};

export default ResultList;
