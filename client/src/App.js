import React, { useEffect } from 'react';

import { connect } from 'react-redux'

import Container from './components/container'
import { getData } from './actions/actions'


function App() {
   useEffect(() => {
      getData(1)
   }, [])
   return (
      <div className="App">
         App
         <Container />
      </div>
   );
}

const mapStateToProps = state => {
   return {
      character: state.character,
      number: state.number
   }
}

export default connect(mapStateToProps, {})(App);
