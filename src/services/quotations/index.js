import api from '../api'

export async function getQuotes(data) {
  return await api.post('/quote', data)
}
