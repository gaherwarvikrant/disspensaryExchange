import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Get Social Credential  */

export const getSocialLoginService = (requestBody) => httpClient.post(apiURL.GET_AUTH_CREDENTIAL_URL, requestBody);
