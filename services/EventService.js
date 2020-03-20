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
  getCommonData() {
    return apiClient.get('/all')
  },
  getCountriesData() {
    return apiClient.get('/countries')
  }
}
