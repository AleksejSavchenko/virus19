import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://corona.lmao.ninja',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getAllInfo() {
    return apiClient.get('/all')
  },
  getByCountriesInfo() {
    return apiClient.get('/countries')
  }
}
