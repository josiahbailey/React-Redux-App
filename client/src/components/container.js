import React from 'react';

import CharacterInfo from './characterInfo'

const Container = ({ character, getPrevData, getNextData, isFetching, error }) => {
   const { name } = character
   return (
      <>
         <div className='container'>
            <button onClick={getPrevData}>Prev</button>
            {isFetching ? <p>Loading...</p> : <p>{name}</p>}
            {error ? <p>{'Error'}</p> : <></>}
            <button onClick={getNextData}>Next</button>
         </div>
         {isFetching ? <p>Loading...</p> : <CharacterInfo character={character} />}
      </>
   );
}

export default Container;