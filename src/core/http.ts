import axios from 'axios';

const HTTP = axios.create({
  baseURL: process.env.REACT_APP_API_BASE
});

HTTP.interceptors.request.use((req) => {
  return req;
});

HTTP.interceptors.response.use(
  (res) => {
    return res.data.data;
  },
  (err) => {
    throw err;
  }
)

export default HTTP;