import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.20.102.115:3000/api',
})

