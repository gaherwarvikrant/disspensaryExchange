import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Business Price Plan list  */

export const getBusinessPricePlansListService = () => httpClient.get(apiURL.BUSINESS_PRICE_PLANS_LIST_URL);
