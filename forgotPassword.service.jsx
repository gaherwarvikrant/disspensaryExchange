import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* User Forgot Password Service  */

export const getForgotPasswordService = (requestBody) => httpClient.post(apiURL.FORGOT_PASSWORD_URL, requestBody);
