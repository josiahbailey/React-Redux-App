import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const getData = num => dispatch => {
   dispatch({ type: FETCH_DATA })
   axios.get(`https://swapi.co/api/people/${num}/`)
      .then(res => {
         //console.log(res)
         dispatch({ type: FETCH_SUCCESS, payload: { num: num, data: res.data } });
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: FETCH_FAIL, payload: err })
      })
}

export const SUB_NUM = 'SUB_NUM'
export const ADD_NUM = 'ADD_NUM'

export const subNum = () => {
   return { type: SUB_NUM }
}

export const addNum = () => {
   return { type: ADD_NUM }
}