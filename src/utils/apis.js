import axios from 'axios'

const serverURL = axios.create({
   baseURL: 'http://localhost:3000',
})

export default serverURL
