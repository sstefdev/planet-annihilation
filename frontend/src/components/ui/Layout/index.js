import { Box } from '@mui/material';
import { Particles } from 'components/common';
import { PageWrapper, Navbar, Footer } from 'components/ui';

const Layout = ({ children }) => {
	return (
		<Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', width: '100%' }}>
			<Particles />
			<Navbar />
			<Box
				sx={{
					position: 'relative',
					zIndex: 2,
					height: '100%',
					width: '100%',
				}}
			>
				<PageWrapper>{children}</PageWrapper>
			</Box>
			<Footer />
		</Box>
	);
};

export default Layout;
