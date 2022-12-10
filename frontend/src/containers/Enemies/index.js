import { Box, Typography } from '@mui/material';
import InfoBox from 'components/common/InfoBox';
import { useAppContext } from 'utils/context';

import styles from './styles.module.scss';

const Enemies = () => {
	const { enemies } = useAppContext();

	return (
		<Box>
			<Typography variant="h3" sx={{ marginBottom: '36px' }}>
				These are the Enemies
			</Typography>
			<Box className="entities">
				{enemies?.map((enemy) => (
					<InfoBox {...enemy} key={enemy.id} link={`/enemies/${enemy.id}`} />
				))}
			</Box>
		</Box>
	);
};

export default Enemies;
