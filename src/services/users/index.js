import api from '../api'

export const getUser = async (username) => {
  return await api.get(`/user/${username}`)
}

export const saveUser = async (user) => {
  return await api.post('/user', user)
}

export const delUser = async (username) => {
  return await api.delete(`/user/${username}`)
}

export const updateUser = async (username, data) => {
  return await api.put(`/user/${username}`, data)
}
