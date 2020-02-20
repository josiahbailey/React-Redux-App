import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAIL, ADD_NUM, SUB_NUM } from '../actions/actions'

const initialState = {
   character: [],
   number: 1,
   error: '',
   isFetching: false
}

export const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_DATA:
         return {
            ...state,
            isFetching: true,
         }
      case FETCH_SUCCESS:
         return {
            ...state,
            isFetching: false,
            character: action.payload.data,
            error: ''
         }
      case FETCH_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      case ADD_NUM:
         let addNum = state.number
         if (addNum < 88) {
            addNum += 1
         }
         console.log(addNum)
         return {
            ...state,
            number: addNum
         }
      case SUB_NUM:
         let subNum = state.number
         if (subNum > 1) {
            subNum -= 1
         }
         console.log(subNum)
         return {
            ...state,
            number: subNum
         }
      default:
         return state
   }
}