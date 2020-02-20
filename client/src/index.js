import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { Reducer } from './reducers'

const store = createStore(Reducer, applyMiddleware())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
