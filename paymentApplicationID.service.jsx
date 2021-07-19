import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Add Authentication Token */

export const getPaymentApplicationIDService = () => httpClient.get(apiURL.GET_APPLICATION_ID_URL);
