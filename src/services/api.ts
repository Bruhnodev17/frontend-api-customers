import axios from 'axios'

 const api = axios.create({
    baseURL: "http://localhost:2023"
})

export default api

