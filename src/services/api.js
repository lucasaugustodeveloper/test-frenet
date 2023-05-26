import axios from 'axios'

const api = axios.create({
  baseURL: 'https://frontend-test.frenet.dev/v1'
})

export default api
