import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Add Authentication Token */

export const setPaymentService = (requestBody) => httpClient.post(apiURL.SET_PAYMENT_URL, requestBody);

/* request to create payment order */
export const createPaymentOrder = (requestBody) => httpClient.post(apiURL.CREATE_PAYMENT_ORDER_URL, requestBody);
