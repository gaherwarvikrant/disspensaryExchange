import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Add To Favorites Service */

export const addToFavoritesService = (requestBody) => httpClient.post(apiURL.ADD_TO_FAVORITES_URL, requestBody);

export const getRemainingFavoritesService = () => httpClient.get(apiURL.GET_REMAINING_FAVORITES_URL);
