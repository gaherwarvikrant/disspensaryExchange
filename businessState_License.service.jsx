import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Business State License List */
export const getBusinessStateLicenseListService = () => httpClient.get(apiURL.BUSINESS_STATE_LICENSE_LIST_URL);
