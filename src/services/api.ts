import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.20.97.94:3000/api',
})

