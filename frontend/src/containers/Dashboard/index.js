import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import { useAppContext } from 'utils/context';

const Dashboard = () => {
	const { user } = useAppContext();

	return (
		<Box>
			{user ? (
				<>
					<Typography variant="h2" sx={{ marginBottom: '10px' }}>
						Dashboard
					</Typography>
					<img style={{ borderRadius: '16px' }} src={user.image} alt={user.username} />
					<Typography variant="h4" sx={{ margin: '10px 0px' }}>
						Welcome {user.username}!
					</Typography>
					<Typography variant="h4" sx={{ marginBottom: '10px' }}>
						These are your highscores:
					</Typography>
				</>
			) : (
				<Typography variant="h2" sx={{ maxWidth: '800px', margin: '0 auto' }}>
					Hello to Planet Annhiliation, please login or register.
				</Typography>
			)}
		</Box>
	);
};

export default Dashboard;
