import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

const axiosSever = axios.create({
    baseURL: apiConfig.url,
    headers: {
        'Content-Type': 'application/json'
    },
    mode: "no-cors",
    paramsSerializer: params => queryString.stringify({...params,})
});

axiosSever.interceptors.request.use(
    function (config) {
        // Attach token to request if exists
        // Refresh token
        const accessToken = localStorage.getItem('access_token')

        console.log(accessToken)

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

axiosSever.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default axiosSever;