import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from './axiosInstance';

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [enemies, setEnemies] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [themeType, setThemeType] = useState('dark');
	const [isLoading, setIsLoading] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwt'));

	const refreshUser = async (id) => {
		setIsLoading(true);
		const { data } = await axios(`/users/google-id/${id}`);
		setUser(data);
		setIsLoading(false);
	};

	const checkUser = async () => {
		setIsLoading(true);
		const { data } = await axios('/users/current', {
			headers: {
				Authorization: jwtToken,
			},
		});
		if (data) {
			setUser(data);
		}
		setIsLoading(false);
	};

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
