import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import {
	Dashboard,
	LoginAndRegister,
	Game,
	Enemies,
	Enemy,
	Starships,
	Starship,
	Planets,
	Planet,
	NotFound,
} from 'containers';
import { Layout } from 'components/ui';
import { useAppContext } from 'utils/context';

const App = () => {
	const { themeType, isAuthenticated } = useAppContext();

	const theme = createTheme({
		palette: {
			mode: themeType,
			primary: {
				main: '#011323',
			},
			secondary: {
				main: '#04293a',
			},
			warning: {
				main: '#ecb365',
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Layout>
				<Routes>
					<Route path="/" element={isAuthenticated ? <Dashboard /> : <LoginAndRegister />} />
					<Route path="/login" element={<LoginAndRegister />} />
					<Route path="/game" element={<Game />} />
					<Route path="/enemies">
						<Route index element={<Enemies />} />
						<Route path=":id" element={<Enemy />} />
					</Route>
					<Route path="/planets">
						<Route index element={<Planets />} />
						<Route path=":id" element={<Planet />} />
					</Route>
					<Route path="/spaceships">
						<Route index element={<Starships />} />
						<Route path=":id" element={<Starship />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</ThemeProvider>
	);
};

export default App;
