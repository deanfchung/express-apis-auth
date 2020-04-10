import { combineReducers } from 'redux'

const initialState = {
   todos: ['build this app'],
}
const reducer = (state = initialState, action) => {
   if (action.type === 'DUMMY_ACTION') {
      return state
   }
   return state
}
export default combineReducers({
   dummyReducer: reducer,
})
