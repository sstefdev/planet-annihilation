import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;
const jwt = localStorage.getItem('jwt');

const axiosInstance = axios.create({
	baseURL: `${baseURL}/api`,
	headers: {
		Authorization: jwt,
	},
	withCredentials: true,
});

export { baseURL };
export default axiosInstance;
