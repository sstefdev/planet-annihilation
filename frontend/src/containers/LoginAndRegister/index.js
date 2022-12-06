import { useState } from 'react';
import { Typography, Button, TextField, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'utils/axiosInstance';
import { useAppContext } from 'utils/context';
import { useNavigate } from 'react-router-dom';

const LoginAndRegister = () => {
	const navigate = useNavigate();
	const { setUser, setIsAuthenticated } = useAppContext();
	const [userInfo, setUserInfo] = useState({ email: '', password: '' });
	const [registerInfo, setRegisterInfo] = useState({ email: '', password: '', password: '', confirmPassword: '' });
	const [modalState, setModalState] = useState(0);

	const handleInputChange = (e, type) => {
		const { name, value } = e.target;
		if (type === 'login') {
			setUserInfo((state) => ({ ...state, [name]: value }));
		} else {
			setRegisterInfo((state) => ({ ...state, [name]: value }));
		}
	};

	const validateRegisterInfo = () => {
		const { email, password, confirmPassword } = registerInfo;
		if (email.length > 0 && password.length > 0 && confirmPassword.length > 0) {
			if (password !== confirmPassword) {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	};

	const handleLoginAndRegister = async (e, type) => {
		e.preventDefault();
		const { data } = await axios.post(`/auth/${type}`, type === 'login' ? { ...userInfo } : { ...registerInfo });
		setUser(data.user);
		if (data.user.token) localStorage.setItem('jwt', data.user.token);
		navigate('/');
	};

	const handleGoogleLogin = async () => {
		window.open('http://localhost:3010/api/auth/google', '_self');
	};

	return (
		<>
			<Typography variant="h3" fontFamily="Press Start 2P">
				{modalState === 0 ? 'Login' : 'Register'}
			</Typography>
			{modalState === 0 && <Typography variant="h5">and destroy some planets!👾</Typography>}
			{modalState === 0 ? (
				<Box
					onSubmit={(e) => handleLoginAndRegister(e, 'login')}
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
						sx={{ width: '100%', maxWidth: '500px' }}
						id="email"
						label="Email"
						variant="filled"
						name="email"
						onChange={(e) => handleInputChange(e, 'login')}
					/>
					<TextField
						type="password"
						sx={{ width: '100%', maxWidth: '500px' }}
						id="password"
						label="Password"
						variant="filled"
						name="password"
						onChange={(e) => handleInputChange(e, 'login')}
					/>
					<Box sx={{ display: 'flex', gridGap: '16px', marginBottom: '16px' }}>
						<Button type="submit" color="secondary" variant="contained">
							Login
						</Button>
						<Button color="secondary" variant="contained" onClick={handleGoogleLogin}>
							<GoogleIcon />
						</Button>
					</Box>
				</Box>
			) : (
				<Box
					onSubmit={(e) => handleLoginAndRegister(e, 'register')}
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
						sx={{ width: '100%', maxWidth: '500px' }}
						id="username"
						label="Username"
						variant="filled"
						name="username"
						onChange={handleInputChange}
					/>
					<TextField
						type="text"
						sx={{ width: '100%', maxWidth: '500px' }}
						id="email"
						label="Email"
						variant="filled"
						name="email"
						onChange={handleInputChange}
					/>
					<TextField
						type="password"
						sx={{ width: '100%', maxWidth: '500px' }}
						id="password"
						label="Password"
						variant="filled"
						name="password"
						onChange={handleInputChange}
					/>
					<TextField
						type="password"
						sx={{ width: '100%', maxWidth: '500px' }}
						id="password-repeat"
						label="Confirm Password"
						variant="filled"
						name="confirmPassword"
						onChange={handleInputChange}
					/>
					<Box sx={{ display: 'flex', gridGap: '16px', marginBottom: '16px' }}>
						<Button disabled={validateRegisterInfo()} type="submit" color="secondary" variant="contained">
							Register
						</Button>
					</Box>
				</Box>
			)}
			<Typography onClick={() => setModalState(modalState === 0 ? 1 : 0)} component="a" sx={{ cursor: 'pointer' }}>
				{modalState === 0 ? "Don't have an account?" : 'Login and destroy some planets'}
			</Typography>
		</>
	);
};

export default LoginAndRegister;
