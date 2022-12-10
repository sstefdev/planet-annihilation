import axios from './axiosInstance';

// auth api
export const fetchGoogleUser = async (id) => {
	try {
		const { data } = await axios(`/users/google-id/${id}`);
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const fetchUser = async (jwtToken) => {
	try {
		const { data } = await axios('/users/current', {
			headers: {
				Authorization: jwtToken,
			},
		});
		return data;
	} catch (err) {
		console.log(err);
	}
};

// planets api
export const fetchPlanet = async (id) => {
	try {
		const { data } = await axios(`/planets/${id}`);
		return data[0];
	} catch (err) {
		console.log(err);
	}
};

export const fetchAllPlanets = async () => {
	try {
		const { data } = await axios('/planets');
		return data;
	} catch (err) {
		console.log(err);
	}
};

// starships api

export const fetchStarship = async (id) => {
	try {
		const { data } = await axios(`/starships/${id}`);
		return data[0];
	} catch (err) {
		console.log(err);
	}
};

export const fetchAllStarships = async () => {
	try {
		const { data } = await axios('/starships');
		return data;
	} catch (err) {
		console.log(err);
	}
};

// enemies api

export const fetchEnemy = async (id) => {
	try {
		const { data } = await axios(`/enemies/${id}`);
		return data[0];
	} catch (err) {
		console.log(err);
	}
};

export const fetchAllEnemies = async () => {
	try {
		const { data } = await axios('/enemies');
		return data;
	} catch (err) {
		console.log(err);
	}
};

// army api

export const createArmy = async (strength) => {
	try {
		const { data } = await axios.post('/army', { strength });
		return data;
	} catch (err) {
		console.log(err);
	}
};
