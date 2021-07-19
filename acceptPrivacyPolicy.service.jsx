import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Set eula privacy policy BFF API */
export const setPrivacyPolicy = (requestBody) => httpClient.post(apiURL.SET_PRIVACY_POLICY, requestBody);
