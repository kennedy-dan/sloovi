import axios from 'axios';
import { api } from '../url';

const token = window.localStorage.getItem('token')
const axiosInstance = axios.create({
    baseURL : api,

    headers: {
        'Authorization': token? `Bearer ${token}` : '',
        'Accept': 'application/json',
        'Content-Type': 'application/json',          
    }
})



export default axiosInstance