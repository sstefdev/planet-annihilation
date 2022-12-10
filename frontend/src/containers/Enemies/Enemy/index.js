import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEnemy } from 'utils/api';

const Enemy = () => {
	const { id } = useParams();
	const [enemy, setEnemy] = useState(null);

	const fetchSingleEnemy = async () => {
		const enemy = await fetchEnemy(id);
		setEnemy(enemy);
	};

	useEffect(() => {
		fetchSingleEnemy();
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'start',
			}}
		>
			<h1>
				<code>Enemy: </code>
				{enemy?.name}
			</h1>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
					'& img': {
						maxWidth: '300px',
					},
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'start',
						justifyContent: 'start',
					}}
				>
					<h2>Description: </h2>
					<p style={{ textAlign: 'start', maxWidth: '800px' }}>{enemy?.description}</p>
				</Box>
				<img src={enemy?.image} alt={enemy?.name} />
			</Box>
		</Box>
	);
};

export default Enemy;
