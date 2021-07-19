import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Add Phone Number service */
export const addPhoneNumberService = (requestBody) => httpClient.post(apiURL.ADD_PHONE_NUMBER_URL, requestBody);

/* get Phone Number service */
export const getPhoneNumberService = (source) => httpClient.get(apiURL.GET_PHONE_NUMBER_URL, source);
