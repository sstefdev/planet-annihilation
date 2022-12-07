import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from './axiosInstance';

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
	const { search } = useLocation();
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [enemies, setEnemies] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [themeType, setThemeType] = useState('dark');
	const [isLoading, setIsLoading] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [jwtToken, _setJwtToken] = useState(localStorage.getItem('jwt'));

	const updateUser = async (id) => {
		setIsLoading(true);
		const { data } = await axios(`/users?id=${id}`);
		setUser(data);
		setIsLoading(false);
	};

	const checkUser = async () => {
		setIsLoading(true);
		const { data } = await axios('/users/token', {
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
		if (!user) checkUser();
	}, [user, jwtToken]);

	useEffect(() => {
		if (search) {
			const userId = search?.split('=')[1];
			if (userId) updateUser(userId);
			navigate('/');
		}
	}, [search]);

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
