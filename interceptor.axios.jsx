import axios from './api.axios';
import WebStorage from '../WebStorage';

/* Please add common configuration here */

axios.interceptors.request.use(
  (config) => {
    /* Web Storage Token Get */
    const token = WebStorage().userToken();
    let header = null;
    if (token) {
      /* Header Added */
      header = { 'x-auth': `Bearer ${token}` };
    }
    if (header) {
      // eslint-disable-next-line no-param-reassign
      config.headers = header;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default axios;
