import axios, { AxiosInstance } from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL
export const SEARCH_PATH = "/api/files/search"

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  // },
})

export default api
