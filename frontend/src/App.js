import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Dashboard, Login, Game, EnemyList, Enemy, NotFound } from 'containers';
import { Layout } from 'components';
import { useAppContext } from 'utils/context';

const App = () => {
	const { themeType } = useAppContext();

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
					<Route path="/" element={<Dashboard />} />
					<Route path="/login" element={<Login />} />
					<Route path="/game" element={<Game />} />
					<Route path="/enemies">
						<Route index element={<EnemyList />} />
						<Route path=":id" element={<Enemy />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</ThemeProvider>
	);
};

export default App;
