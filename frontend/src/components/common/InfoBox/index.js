import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const InfoBox = ({ name, description, image, link }) => (
	<Link to={link} style={{ textDecoration: 'none' }}>
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				height: '100%',
				padding: '0px 46px 23px 46px',
				'&:hover': {
					backgroundColor: 'rgba(0, 0, 0, 0.2)',
					cursor: 'pointer',
				},
			}}
		>
			<h2 style={{ fontSize: '30px' }}>{name}</h2>
			<p>{description}</p>
			<img referrerPolicy="no-referrer" src={image} alt={name} />
		</Box>
	</Link>
);

export default InfoBox;
