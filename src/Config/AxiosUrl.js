import axios from 'axios';

const instanceBaseurl = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,

})

instanceBaseurl.defaults.withCredentials = true;
instanceBaseurl.interceptors.request.use(function (config) {
    const token = localStorage.getItem("flip-token");
    config.headers.Authorization = `bearer ${JSON.parse(token)}`;
    return config;
}, function (error) {
    return Promise.reject(error);
});
export default instanceBaseurl;