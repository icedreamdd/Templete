import axios from 'axios'
import { BASE_URL } from '@/config'

const instance = axios.create({
  baseURl: BASE_URL
})

// 请求拦截器
instance.interceptors.request.use(confog => {
  return config
}, error => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(err)
})

export function get (url, params) {
  return instance.get(url, { params })
}

export function post (url, params) {
  return instance.post(url, params)
}