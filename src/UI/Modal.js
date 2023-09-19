import React from 'react';
import Card from './Card';
import './Modal.css';

const Modal = (props) => {
  console.log();
  return (
    <div>
      <div className='backdrop' onClick={props.onClose} />
      <Card className='modal'>
        <div>
          <header className='header'>
            <h2>{props.word}</h2>
          </header>
          <div className='content'>
            <h3>Meanings</h3>
            {props.data.definitions.map((definition) => (
              <p>{definition}</p>
            ))}
            <h3>Examples</h3>
            {props.data.examples.map((example) => (
              <p>{example}</p>
            ))}
          </div>
          <footer className='actions'>
            <button className='button' onClick={props.onClose}>
              Okay
            </button>
          </footer>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
