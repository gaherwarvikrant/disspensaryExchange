import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* All Coupon services */
/* get  and add reqBody to coupon list service */
export const getCouponListService = (requestBody, source) =>
  httpClient.post(apiURL.GET_COUPON_LIST_URL, requestBody, { cancelToken: source.token });
/* get single coupon service */
export const getSingleCouponService = (id) => httpClient.get(apiURL.GET_SINGLE_COUPON_URL + id);
/* get plan list for coupon generation */
export const getCouponPlanListService = (source) => httpClient.get(apiURL.GET_COUPON_PLAN_LIST_URL, { cancelToken: source.token });
/* add coupon service */
export const addCouponService = (requestBody) => httpClient.post(apiURL.ADD_COUPON_URL, requestBody);
/* edit coupon service */
export const editCouponService = (requestBody) => httpClient.put(apiURL.EDIT_COUPON_URL, requestBody);
