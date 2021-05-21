import axios from 'axios';

const BASE_URL = 'http://api.stickinteractive.com'

const DEFAULT_HEADERS = {
	'Content-Type': 'application/json',
	'Access-Controll-Allow-Origin': '*'
}

const instance = axios.create({
	baseURL: BASE_URL,
	headers: DEFAULT_HEADERS,
	timeout: 3000,
});

export default instance;


