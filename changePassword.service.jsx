import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Add Change Password Service */

export const getConfirmPasswordService = (requestBody) => httpClient.post(apiURL.CONFIRM_PASSWORD_URL, requestBody);
