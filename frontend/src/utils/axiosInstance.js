import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
	baseURL: `${baseURL}/api`,
	withCredentials: true,
});

export { baseURL };
export default axiosInstance;
