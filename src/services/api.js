import axios from "axios";

const api = axios.create({
    baseURL: 'https://www.tabnews.com.br'
})

export default api;