import { useState } from 'react';
import { Typography, Button, TextField, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'utils/axiosInstance';
import { useAppContext } from 'utils/context';
import { useNavigate } from 'react-router-dom';

const loginFields = ['email', 'password'];
const registerFields = ['username', 'email', 'password', 'confirmPassword'];

const LoginAndRegister = () => {
	const navigate = useNavigate();
	const { setUser, setIsAuthenticated } = useAppContext();
	const [userInfo, setUserInfo] = useState({ email: '', password: '' });
	const [registerInfo, setRegisterInfo] = useState({ username: '', email: '', password: '', confirmPassword: '' });
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
		if (data?.user?.token) localStorage.setItem('jwt', data.user.token);
		if (type === 'register') setModalState(0);
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
					{loginFields.map((field) => (
						<TextField
							key={field}
							type={field === 'password' ? 'password' : 'text'}
							sx={{ width: '100%', maxWidth: '500px' }}
							id={field}
							label={field[0].toUpperCase() + field.slice(1)}
							variant="filled"
							name={field}
							onChange={(e) => handleInputChange(e, 'login')}
							value={userInfo[field]}
						/>
					))}
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
					{registerFields.map((field) => (
						<TextField
							key={field}
							type={field === 'password' || field === 'confirmPassword' ? 'password' : 'text'}
							sx={{ width: '100%', maxWidth: '500px' }}
							id={field}
							label={field[0].toUpperCase() + field.slice(1).replace('P', ' p')}
							variant="filled"
							name={field}
							onChange={(e) => handleInputChange(e, 'register')}
							value={registerInfo[field]}
						/>
					))}
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
