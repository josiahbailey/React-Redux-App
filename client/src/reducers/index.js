import { FETCH_DATA, FETCH_SUCCESS, FETCH_TAIL } from '../actions/actions'

const initialState = {
   character: {},
   number: 0,
   error: '',
   isFetching: false
}

export const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_DATA:
         return {
            character: {},
            number: 1
         }
      default:
         return state
   }
}