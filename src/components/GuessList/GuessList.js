import React from 'react';

function GuessList({wordList}) {
  
  
  return (
  <div className="guess-results">
    {
      wordList.map(({id, label}) => (
        <p className='guess' key={id}>{label}</p>
      ))
    }

  </div>
  );
}

export default GuessList;
