import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [enemies, setEnemies] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [themeType, setThemeType] = useState('dark');
	const [isLoading, setIsLoading] = useState(false);

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
