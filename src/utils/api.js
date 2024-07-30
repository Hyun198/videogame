import axios from 'axios';

const API_KEY = process.env.REACT_APP_RAWG_API_KEY

const api = axios.create({
    baseURL: 'https://api.rawg.io/api',
    headers: {
        'Accept': 'application/json',
    },
    params: {
        key: API_KEY,
    },

});

export default api;
