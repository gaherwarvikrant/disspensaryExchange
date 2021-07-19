import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Confirm Password Service */
export const getConfirmPasswordService = (requestBody) => httpClient.post(apiURL.CONFIRM_PASSWORD_URL, requestBody);
