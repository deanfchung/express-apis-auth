import { combineReducers } from 'redux'
import * as types from '../utils/types'

const initialState = {
   username: '',
   password: '',
   isAuthenticated: false,
   token: null,
}
const auth = (state = initialState, action) => {
   switch (action.type) {
      case types.USER_CHANGE:
         return { ...state, username: action.username }
      case types.PASS_CHANGE:
         return { ...state, password: action.password }
      case types.AUTH:
         state.isAuthenticated = true
         state.token = action.token
         return { ...state }
   }
   return state
}
export default combineReducers({
   auth,
})
