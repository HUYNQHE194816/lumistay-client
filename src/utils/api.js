import axios from 'axios';

const api = axios.create({
    // You can set the base URL based on your server configuration
    baseURL: 'http://localhost:5000/api', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
