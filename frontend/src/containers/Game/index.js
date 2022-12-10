import { Box, Button, Input, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { createArmy } from 'utils/api';
import { useAppContext } from 'utils/context';
import styles from './styles.module.scss';

const Game = () => {
	const { user, enemies, planets, starships } = useAppContext();
	const [army, setArmy] = useState(null);
	const [strength, setStrength] = useState(0);
	const [enemy, setEnemy] = useState(null);
	const [enemyPlanet, setEnemyPlanet] = useState(null);
	const [myPlanet, setMyPlanet] = useState(null);

	const generateArmy = async (strength) => {
		const createdArmy = await createArmy(strength);
		setArmy(createdArmy);
	};

	useEffect(() => {
		if (!enemy) {
			const enemy = enemies[Math.floor(Math.random() * planets.length)];
			setEnemy(enemy);
		}
		if (!enemyPlanet) {
			const enemyPlanet = planets[Math.floor(Math.random() * planets.length)];
			setEnemyPlanet(enemyPlanet);
		}
		if (!myPlanet) {
			const myPlanet = planets[Math.floor(Math.random() * planets.length)];
			setMyPlanet(myPlanet);
		}
	}, []);

	return (
		<Box className={styles.game}>
			<Typography variant="h3">Generate your army and destroy enemy planet</Typography>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					gridGap: '200px',
					marginTop: '26px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-between',
						gridGap: '12px',
					}}
				>
					<Typography variant="h4">{user?.username}</Typography>
					<img src={user?.image} alt={user?.name} />
					<Typography variant="h4">Your planet</Typography>
					<Typography variant="h5">{myPlanet?.name}</Typography>
					<img src={myPlanet?.image} alt={myPlanet?.name} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						gridGap: '20px',
					}}
				>
					{army?.map(({ numUnits, unitType }) => (
						<Box
							key={unitType.name}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gridGap: '10px',
								height: '100%',
								maxHeight: '200px',
							}}
						>
							<Typography
								sx={{
									maxWidth: '100px',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
									overflow: 'hidden',
								}}
								variant="h7"
							>
								{unitType.name}
							</Typography>
							<img src={unitType.image} alt={unitType.name} />
							<Typography sx={{ marginTop: 'auto' }}>Count {numUnits}</Typography>
						</Box>
					))}
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						alignItems: 'center',
						gridGap: '12px',
					}}
				>
					<Typography variant="h4">{enemy?.name}</Typography>
					<img src={enemy?.image} alt={enemy?.name} />
					<Typography variant="h4">Enemy planet</Typography>
					<Typography variant="h5">{enemyPlanet?.name}</Typography>
					<img src={enemyPlanet?.image} alt={enemyPlanet?.name} />
				</Box>
			</Box>
			<Box>
				<Typography variant="h4">Generate Army</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						gridGap: '20px',
					}}
				>
					<Input onChange={(e) => setStrength(e.target.value)} type="number" />
					<Button onClick={() => generateArmy(strength)} sx={{ marginTop: '12px' }} variant="dark">
						Generate
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Game;
