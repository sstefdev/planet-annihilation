import { Box, Typography } from '@mui/material';
import InfoBox from 'components/common/InfoBox';
import { useAppContext } from 'utils/context';

import styles from './style.module.scss';

const Starships = () => {
	const { starships } = useAppContext();

	return (
		<Box>
			<Typography variant="h3" sx={{ marginBottom: '36px' }}>
				These are the available Starships
			</Typography>
			<Box className="entities">
				{starships.map((starship) => (
					<InfoBox {...starship} key={starship.id} link={`/starships/${starship.id}`} />
				))}
			</Box>
		</Box>
	);
};

export default Starships;
