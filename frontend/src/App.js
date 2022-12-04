import { Route, Routes } from 'react-router-dom';
import { Dashboard, Login, Game, EnemyList, Enemy, NotFound } from 'containers';

const App = () => (
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
);

export default App;
