import React, { useEffect } from 'react';

import { connect } from 'react-redux'

import Container from './components/container'
import { getData, addNum, subNum } from './actions/actions'


function App({ number, character, error, isFetching, getData, addNum, subNum }) {
   useEffect(() => {
      getData(number)
   }, [number])
   const getNextData = e => {
      e.preventDefault()
      addNum()
   }
   const getPrevData = e => {
      e.preventDefault()
      subNum()
   }
   return (
      <div className="App">
         <p>StarWars Characters</p>
         <Container
            error={error}
            isFetching={isFetching}
            getNextData={getNextData}
            getPrevData={getPrevData}
            character={character} />
      </div>
   );
}

const mapStateToProps = state => {
   return {
      character: state.character,
      number: state.number,
      error: state.error,
      isFetching: state.isFetching
   }
}

export default connect(mapStateToProps, { getData, addNum, subNum })(App);
