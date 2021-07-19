import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Info graphics BFF API */

export const getGeoBusinessCountService = (source) => httpClient.get(apiURL.GET_GEO_BUSINESS_COUNT, { cancelToken: source.token });
export const getGeoJson = (source) => httpClient.get(apiURL.GET_GEO_JSON, { cancelToken: source.token });
