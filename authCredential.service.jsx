import httpClient from './interceptor.axios';
import { apiURL } from '../utils/api';

/* Get Auth Credential */

export const getAuthCredentialService = () => httpClient.get(apiURL.GET_AUTH_CREDENTIAL_URL);
