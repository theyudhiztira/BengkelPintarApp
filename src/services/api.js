import Axios from "axios"
import appConfig from "../config/env.json"
import AsyncStorage from '@react-native-async-storage/async-storage'

const env = process.env.REACT_APP_STAGE

const api = Axios.create({
  baseUrl: appConfig[env].baseUrl,
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  timeout: 5000
})

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('bp_token')
  config.headers = { ...config.headers, Authorization: `${token}`}

  return config;
}, (error) => {
  return Promise.reject(error);
})

api.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
  return response;
}, (error) => {
  if(error.response){
    if (([401, 403]).includes(error.response.status)) {
      return AsyncStorage.removeItem('bp_token')
    }
  }

  return Promise.reject(error);
});

export default api;