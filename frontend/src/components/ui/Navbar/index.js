import {
	AppBar,
	Toolbar,
	Typography,
	FormControlLabel,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Avatar,
	Tooltip,
	Box,
	Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useAppContext } from 'utils/context';
import { Logo } from 'components/common';
import IOSSwitch from 'components/mui/Switch';

const pages = [
	{ label: 'Play', link: '/game' },
	{ label: 'Planets', link: '/planets' },
	{ label: 'Spaceships', link: '/spaceships' },
	{ label: 'Enemies', link: '/enemies' },
];

const Navbar = () => {
	const { themeType, setThemeType } = useAppContext();
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (e) => {
		setAnchorElNav(e.currentTarget);
	};
	const handleOpenUserMenu = (e) => {
		setAnchorElUser(e.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const themeChangeHandler = (e) => {
		const { checked } = e.target;
		if (!checked) {
			setThemeType('light');
		} else setThemeType('dark');
	};

	return (
		<AppBar
			position="static"
			sx={{ width: '100%', zIndex: 2 }}
			style={{
				backgroundColor: themeType === 'light' ? '#6E85B7' : '#041C32',
			}}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Logo mobile />
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map(({ label, link }) => (
								<MenuItem LinkComponent={Link} to={link} key={label} onClick={handleCloseNavMenu}>
									<Typography sx={{ color: themeType === 'light' ? '#041c32' : '#C4D7E0' }} textAlign="center">
										{label}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Logo />
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map(({ label, link }, index) => (
							<Button
								LinkComponent={Link}
								key={index}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: themeType === 'light' ? '#041c32' : '#C4D7E0', display: 'block' }}
								to={link}
							>
								{label}
							</Button>
						))}
					</Box>
					<FormControlLabel
						checked={themeType === 'dark'}
						control={<IOSSwitch sx={{ m: 1 }} />}
						onChange={themeChangeHandler}
					/>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							<MenuItem onClick={handleCloseUserMenu}>
								<Link to="/">Dashboaard</Link>
							</MenuItem>
							<MenuItem onClick={handleCloseUserMenu}>
								<Typography textAlign="center">Logout</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
