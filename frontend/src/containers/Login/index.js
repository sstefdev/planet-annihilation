import { useState } from 'react';
import { Typography, Button, TextField, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

import { useAppContext } from 'utils/context';
import axiosInstance from 'utils/axiosInstance';

const Login = () => {
	const [userInfo, setUserInfo] = useState({ username: '', password: '' });

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserInfo((state) => ({ ...state, [name]: value }));
	};

	const handleLogin = (e) => {
		e.preventDefault();
	};

	const handleGoogleLogin = async () => {
		const user = await axiosInstance('/auth/google');
	};

	return (
		<>
			<Typography variant="h3" fontFamily="Press Start 2P">
				Login
			</Typography>
			<Typography variant="h4">and destroy some planets!👾</Typography>
			<Box
				onSubmit={handleLogin}
				component="form"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
					gridGap: '20px',
					marginTop: '40px',
				}}
			>
				<TextField
					type="text"
					sx={{ width: '100%', maxWidth: '400px' }}
					id="username"
					label="Username"
					variant="filled"
					name="username"
					onChange={handleInputChange}
				/>
				<TextField
					type="password"
					sx={{ width: '100%', maxWidth: '400px' }}
					id="password"
					label="Password"
					variant="filled"
					name="password"
					onChange={handleInputChange}
				/>
				<Box sx={{ display: 'flex', gridGap: '16px' }}>
					<Button type="submit" color="secondary" variant="contained">
						Login
					</Button>
					<Button color="secondary" variant="contained" onClick={handleGoogleLogin}>
						<GoogleIcon />
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default Login;
