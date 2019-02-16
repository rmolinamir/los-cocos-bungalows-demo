import axios from 'axios';
// URL
import baseURL from './shared/baseURL';

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    }
});

export default instance;
