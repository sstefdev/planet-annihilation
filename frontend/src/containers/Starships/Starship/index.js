import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStarship } from 'utils/api';

const Starship = () => {
	const { id } = useParams();
	const [starship, setStarship] = useState(null);

	const fetchSingleStarship = async () => {
		const starship = await fetchStarship(id);
		setStarship(starship);
	};

	useEffect(() => {
		fetchSingleStarship();
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
				<code>Starship: </code>
				{starship?.name}
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
					<p style={{ textAlign: 'start', maxWidth: '800px' }}>{starship?.description}</p>
				</Box>
				<img src={starship?.image} alt={starship?.name} />
			</Box>
		</Box>
	);
};

export default Starship;
