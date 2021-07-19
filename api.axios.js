import axios from 'axios';
import { apiURL } from '../utils/api';

/* Don't change anything here */
/* Please discuss with team member if you want anything to change */

/* Header Data */
const header = {
  'content-type': 'application/json',
};

/* Default Setting */
export default axios.create({
  baseURL: apiURL.NODE_API_BASE_URL,
  timeout: apiURL.TIME_OUT,
  headers: header,
});
