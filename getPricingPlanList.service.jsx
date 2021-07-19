import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Info graphics BFF API */

export const getBusinessPricingPlanService = (source) => httpClient.get(apiURL.GET_PRICING_PLAN_URL, { cancelToken: source.token });
