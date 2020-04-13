import serverURL from './apis'

export const validateUser = (username, password) => {
   return new Promise(async (res) => {
      try {
         const response = await serverURL.post('/auth/login', { username, password })
         if (response) {
            res(response.data.token)
         }
      } catch (e) {
         console.error('INVALID CREDENTIALS', e)
      }
   })
}
