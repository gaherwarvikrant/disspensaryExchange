import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Add Authentication Token */

export const getAdminUserOrganizationService = (requestBody, source) =>
  httpClient.post(apiURL.GET_USER_ORGANIZATION_URL, requestBody, { cancelToken: source.token });
export const getSuperAdminUserOrganizationService = (requestBody, source) =>
  httpClient.post(apiURL.GET_SUPER_ADMIN_USER_ORGANIZATION_URL, requestBody, { cancelToken: source.token });
export const getReInviteUserService = (requestBody, source) =>
  httpClient.post(apiURL.GET_RE_INVITED_USER_URL, requestBody, { cancelToken: source.token });

export const editSuperAdminUserDetailService = (requestBody, source) =>
  httpClient.put(apiURL.EDIT_SUPER_ADMIN_USER_DETAIL, requestBody, { cancelToken: source.token });

export const getCouponPlanDataService = (source) => httpClient.get(apiURL.GET_COUPON_PLAN_DATA_URL, { cancelToken: source.token });

/* Added State List */
export const getAddedStateList = (selectedStateList) => selectedStateList.map((state) => ({ id: state._id, name: state.name }));

/* Save User from Super Admin User Page */
export const addSuperAdminUserDetailService = (requestBody) => httpClient.post(apiURL.ADD_SUPER_ADMIN_USER_DETAIL, requestBody);
