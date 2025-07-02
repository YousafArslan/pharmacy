import {BASE_URL, BASE_URL_PROD, NODE_ENV} from '@env';

const apiBaseUrl = NODE_ENV === 'production' ? BASE_URL_PROD : BASE_URL;

export default apiBaseUrl;
