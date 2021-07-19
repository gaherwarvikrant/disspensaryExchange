import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Email or Message service */
export const getNotificationService = (requestBody) => httpClient.post(apiURL.NOTIFICATION_URL, requestBody);
