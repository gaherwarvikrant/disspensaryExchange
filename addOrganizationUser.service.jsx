import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Add User from admin */
export const addUserOrganizationService = (requestBody) => httpClient.post(apiURL.ADD_USER_ORGANIZATION_URL, requestBody);

/* get remaining invites count to add user */
export const getRemainingInvitesCount = (source) => httpClient.get(apiURL.GET_REMAINING_INVITES_URL, source);
