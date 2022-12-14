import axios from 'axios'
import {store} from '../redux/Store'

axios.defaults.baseURL='http://localhost:3001'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // show the loading
    store.dispatch({
        type: "change_loading",
        payload: true
    })
    return config;
  }, function (error) {
    // Hide loading
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch({
        type: "change_loading",
        payload: false
    })
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });