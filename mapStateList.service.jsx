import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Map State & License Type List */

/* source props is used for cancel api  */
/* Get State List & License Type list for Map View */
export const getMapStateListService = (source) => httpClient.get(apiURL.MAP_STATE_LIST_URL, { cancelToken: source.token });

/* Get Business Data for load map according to state & license type list */
export const getStateBusiness = (requestBody, source) =>
  httpClient.post(apiURL.MAP_STATE_BUSINESS_LIST_URL, requestBody, { cancelToken: source.token });

/* Get filtered Business Data for load map according to state, license type & no of entries list */
export const getFilteredBussiness = (requestBody, source) =>
  httpClient.post(apiURL.MAP_STATE_FILTERED_BUSINESS_LIST_URL, requestBody, { cancelToken: source.token });

/* Get Business Data for load map according to selected business list */
export const getStateSelectedBusiness = (requestBody, source) =>
  httpClient.post(apiURL.MAP_STATE_SELECTED_BUSINESS_LIST_URL, requestBody, { cancelToken: source.token });
