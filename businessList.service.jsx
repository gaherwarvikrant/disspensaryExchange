import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* get Business List Service */

export const getBusinessListService = (requestBody, source) =>
  httpClient.post(apiURL.BUSINESS_DATA_URL, requestBody, { cancelToken: source.token });

/* get state license types service */
export const getStateLicenseTypesService = (source) => httpClient.get(apiURL.STATE_LICENSE_TYPES_URL, { cancelToken: source.token });

/*  Get viewed records state license types services */
export const getRecViewedStateLicenseTypesService = (source) =>
  httpClient.get(apiURL.REC_VIEWED_STATE_LICENSE_TYPES_URL, { cancelToken: source.token });

/* get filtered business table data */
export const getFilteredBusinessService = (requestBody, source) =>
  httpClient.post(apiURL.GET_FILTERED_BUSINESS_URL, requestBody, { cancelToken: source.token });

/* get record viewed filtered business table data */
export const getRecViewedFilteredBusinessService = (requestBody, source) =>
  httpClient.post(apiURL.REC_VIEWED_GET_FILTERED_BUSINESS_URL, requestBody, { cancelToken: source.token });
