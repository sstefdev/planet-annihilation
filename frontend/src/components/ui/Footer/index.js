import { Container, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Logo } from 'components/common';
import { useAppContext } from 'utils/context';

import styles from './style.module.scss';

const Footer = () => {
	const { themeType } = useAppContext();
	return (
		<footer className={styles.footer} style={{ background: `${themeType === 'light' ? '#6E85B7' : '#041C32'}` }}>
			<Container maxWidth="xl">
				<Logo />
				<Logo mobile />
				<Stack direction="column" spacing={1} sx={{ marginTop: '10px' }}>
					<Link to="/game">Play</Link>
					<Link to="/planets">Planets</Link>
					<Link to="/spaceships">Spaceships</Link>
					<Link to="/enemies">Enemies</Link>
				</Stack>
			</Container>
		</footer>
	);
};

export default Footer;
