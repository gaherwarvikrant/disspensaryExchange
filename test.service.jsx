import httpClient from './interceptor.axios';
// import { apiURL } from '../utils/config';

/*
 *Here change anything before sending any request
 *Alter defaults after instance has been created
 ***instance.defaults.headers.common['custom_auth'] = AUTH_TOKEN***
 *If you need to remove an interceptor later you can.
 *Please refer ###https://www.npmjs.com/package/axios
 */

export default () => httpClient.get('https://reqres.in/api/users?page=2');
