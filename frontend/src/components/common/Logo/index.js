import { Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import { useAppContext } from 'utils/context';

const Logo = ({ mobile }) => {
	const { themeType } = useAppContext();

	return (
		<Typography
			variant="h6"
			noWrap
			component="a"
			href="/"
			sx={{
				mr: { xs: 1, md: 4 },
				display: mobile ? { xs: 'flex', md: 'none' } : { xs: 'none', md: 'flex' },
				alignItems: 'center',
				fontFamily: 'monospace',
				fontWeight: 700,
				letterSpacing: '.3rem',
				color: 'inherit',
				textDecoration: 'none',
			}}
		>
			<RocketLaunchIcon style={{ color: themeType === 'light' ? '#041C32' : '#C4D7E0', marginRight: '6px' }} />
			<Typography
				style={{ color: themeType === 'light' ? '#041C32' : '#C4D7E0', display: mobile ? 'none' : 'block' }}
				variant="h5"
			>
				Planet Annhiliation
			</Typography>
		</Typography>
	);
};

export default Logo;
