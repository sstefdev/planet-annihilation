import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchGoogleUser, fetchUser, fetchAllPlanets, fetchAllStarships, fetchAllEnemies } from './api';
import axios from './axiosInstance';

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [enemies, setEnemies] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [starships, setStarships] = useState([]);
	const [themeType, setThemeType] = useState('dark');
	const [isLoading, setIsLoading] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwt'));

	const refreshUser = async (id) => {
		setIsLoading(true);
		const googleUser = await fetchGoogleUser(id);
		setUser(googleUser);
		setIsLoading(false);
	};

	const checkUser = async () => {
		setIsLoading(true);
		const user = await fetchUser(jwtToken);
		if (user) {
			setUser(user);
		}
		setIsLoading(false);
	};

	const fetchPlanets = async () => {
		setIsLoading(true);
		const planets = await fetchAllPlanets();
		setPlanets(planets);
		setIsLoading(false);
	};

	const fetchStarships = async () => {
		setIsLoading(true);
		const starships = await fetchAllStarships();
		setStarships(starships);
		setIsLoading(false);
	};

	const fetchEnemies = async () => {
		setIsLoading(true);
		const enemies = await fetchAllEnemies();
		setEnemies(enemies);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchPlanets();
		fetchStarships();
		fetchEnemies();
	}, []);

	useEffect(() => {
		if (!user && jwtToken) checkUser();
	}, [user, jwtToken]);

	useEffect(() => {
		const userId = pathname.slice(1);
		if (userId > 0) {
			refreshUser(userId);
			navigate('/');
		}
	}, [pathname]);

	useEffect(() => {
		if (user) {
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
		}
	}, [user]);

	return (
		<AppContext.Provider
			value={{
				user,
				setUser,
				enemies,
				setEnemies,
				planets,
				setPlanets,
				starships,
				setStarships,
				themeType,
				setThemeType,
				isLoading,
				setIsLoading,
				isAuthenticated,
				setIsAuthenticated,
				setJwtToken,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (context === undefined) {
		throw new Error('Context must be used within a AppContextProvider');
	}
	return context;
};
