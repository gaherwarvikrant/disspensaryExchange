import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* User Favorite list Service */

/* source props is used for cancel api  */
export const getFavoritesListService = (requestBody, source) =>
  httpClient.post(apiURL.FAVORITES_LIST_URL, requestBody, { cancelToken: source.token });
