import axios from 'axios'
const URL_API = 'http://localhost:3000/api/prompt'

export const makeRequest = (message) => {
    console.log(message)
    const data = axios.post(URL_API, message)
    return data;
}