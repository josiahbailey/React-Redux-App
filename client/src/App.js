import React, { useEffect } from 'react';

import { connect } from 'react-redux'

import Container from './components/container'
import { getData, addNum, subNum } from './actions/actions'


function App(props) {
   useEffect(() => {
      props.getData(props.number)
   }, [props.number])
   const getNextData = e => {
      e.preventDefault()
      props.addNum()
   }
   const getPrevData = e => {
      e.preventDefault()
      props.subNum()
   }
   return (
      <div className="App">
         StarWars Characters
         <Container error={props.error} isFetching={props.isFetching} getNextData={getNextData} getPrevData={getPrevData} character={props.character} />
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
