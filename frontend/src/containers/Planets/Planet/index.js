import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlanet } from 'utils/api';

const Planet = () => {
	const { id } = useParams();
	const [planet, setPlanet] = useState(null);

	const fetchSinglePlanet = async () => {
		const planet = await fetchPlanet(id);
		setPlanet(planet);
	};

	useEffect(() => {
		fetchSinglePlanet();
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
				<code>Planet: </code>
				{planet?.name}
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
					<p style={{ textAlign: 'start', maxWidth: '800px' }}>{planet?.description}</p>
				</Box>
				<img src={planet?.image} alt={planet?.name} />
			</Box>
		</Box>
	);
};

export default Planet;
