import React from 'react';
import Banner from '../Banner/Banner';

function GuessInput({ handleAddWord, state, answer, wordList }) {
  const [input, setInput] = React.useState('');

  return (
    <div>
      {state !== 'playing' && <Banner state={state} answer={answer} wordList={wordList} />}
      <form className='guess-input-wrapper'
        onSubmit={(e) => {
          e.preventDefault();

          if (input.length !== 5) return;
          const guessInput = input.toUpperCase();

          console.info({ guessInput });
          handleAddWord(guessInput);

          setInput('');
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        {state === 'playing' && (
          <input
            id='guess-input'
            type="text"
            pattern="[A-Za-z]{5}"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        )}
      </form>
    </div>
  );
}

export default GuessInput;
