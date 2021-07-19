import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Add Authentication Token */

export const getLicenseListService = (requestBody, source) =>
  httpClient.post(apiURL.LICENSE_DATA_URL, requestBody, { cancelToken: source.token });

/* Get viewed records Licencedata list */
export const getRecViewedLicenseListService = (requestBody, source) =>
  httpClient.post(apiURL.REC_VIEWED_LICENSE_DATA_URL, requestBody, { cancelToken: source.token });
