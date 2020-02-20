import React from 'react';

import Card from './card'

const Container = ({ character, getPrevData, getNextData, isFetching, error }) => {
   return (
      <div className='container'>
         <button onClick={getPrevData}>Prev</button>
         {isFetching ? <p>Loading...</p> : <Card character={character} />}
         {error ? <p>{'Error'}</p> : <></>}
         <button onClick={getNextData}>Next</button>
      </div>
   );
}

export default Container;