import { Box, Typography } from '@mui/material';
import InfoBox from 'components/common/InfoBox';
import { useAppContext } from 'utils/context';

import styles from './style.module.scss';

const Planets = () => {
	const { planets } = useAppContext();

	return (
		<Box>
			<Typography variant="h3" sx={{ marginBottom: '36px' }}>
				These are the available Planets
			</Typography>
			<Box className="entities">
				{planets.map((planet) => (
					<InfoBox {...planet} key={planet.id} link={`/planets/${planet.id}`} />
				))}
			</Box>
		</Box>
	);
};

export default Planets;
