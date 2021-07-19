import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Apply coupon request api */

export const applyCouponService = (requestBody, source) =>
  httpClient.post(apiURL.APPLY_COUPON_URL, requestBody, { cancelToken: source.token });
