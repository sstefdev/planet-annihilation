import { Container, Box } from '@mui/material';
import { useAppContext } from 'utils/context';

const PageWrapper = ({ children }) => {
	const { themeType } = useAppContext();

	return (
		<Container
			maxWidth="xl"
			sx={{
				boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
				display: 'flex',
				borderRadius: '20px',
				justifyContent: 'center',
				width: '100%',
				height: 'fit-content',
				backgroundColor: themeType === 'light' ? '#6e85b771' : '#041c3261',
				padding: '25px',
				textAlign: 'center',
				backdropFilter: 'blur(3px)',
			}}
		>
			<Box
				sx={{
					backgroundColor: themeType === 'light' ? '#6E85B7' : '#041C32',
					width: '100%',
					borderRadius: 'inherit',
					padding: '30px',
				}}
			>
				{children}
			</Box>
		</Container>
	);
};

export default PageWrapper;
