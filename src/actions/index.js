import * as types from './types'

export const dummyAction = (payload) => {
   return {
      type: types.DUMMY_ACTION, //required
      payload, //optional
   }
}
