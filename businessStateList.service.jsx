import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* source props is used for cancel api  */
/* Get State List for business details page */
export const getBusinessStateListService = (source) => httpClient.get(apiURL.BUSINESS_STATE_LIST_URL, { cancelToken: source.token });
