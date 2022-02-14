import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.20.97.183:3000/api',
})

