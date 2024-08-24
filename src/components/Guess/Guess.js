import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '/src/game-helpers';

function Guess({wordList, answer}) {
  return (
  <div className='guess-results'>
    {
      range(0, NUM_OF_GUESSES_ALLOWED).map((outer_index) => (
        <p className="guess" key={outer_index}>
          {
            range(0, 5).map((inner_index) => {
              const filled = outer_index < wordList.length;
              let checkResult;
              let char = '';
              if(filled) {
                const word = wordList[outer_index].label;
                checkResult = checkGuess(word, answer);
                char = word[inner_index];
              }
              return <span 
              className={filled ? `cell ${checkResult[inner_index].status}` : `cell`}
              key={inner_index}
              >
                {char}
              </span>
            })
          }
        </p>
      ))
    }

  </div>
  );
}

export default Guess;
