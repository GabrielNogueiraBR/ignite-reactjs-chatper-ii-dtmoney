import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.19.132.35:3000/api',
})

