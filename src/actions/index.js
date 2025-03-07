import * as types from '../utils/types'
import { validateUser } from '../utils'
import serverURL from '../apis'

export const setUsername = (username) => {
   return {
      type: types.USER_CHANGE,
      username,
   }
}

export const setPassword = (password) => {
   return {
      type: types.PASS_CHANGE,
      password,
   }
}

export const submitForm = (token) => {
   return {
      type: types.AUTH,
      token,
   }
}
