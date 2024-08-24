import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordList, setWordList] = useState([]);
  const [state, setState] = useState('playing');

  function handleAddWord(label){
    const newWord = {
      label,
      id: crypto.randomUUID()
    };

    const nextWordList = [...wordList, newWord];
    setWordList(nextWordList);

    if (label === answer) {
      setState('win');
    } else if (nextWordList.length >= NUM_OF_GUESSES_ALLOWED) {
      setState('lose');
    }
  }


  return (<React.Fragment>
    <Guess wordList={wordList} answer={answer}></Guess>
    <GuessInput handleAddWord={handleAddWord} state={state} answer={answer} wordList={wordList}></GuessInput>
  </React.Fragment>);
}

export default Game;
