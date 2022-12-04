import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useAppContext } from 'utils/context';

const ParticlesComponent = () => {
	const { themeType } = useAppContext();
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await container;
	}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: {
					enable: true,
					zIndex: 1,
				},
				particles: {
					number: {
						value: 200,
						density: {
							enable: true,
							value_area: 700,
						},
					},
					color: {
						value: themeType === 'light' ? '#064663' : '#B2C8DF',
					},
					shape: {
						type: 'circle',
					},
					opacity: {
						value: 1,
						random: true,
						anim: {
							enable: true,
							speed: 1,
							opacity_min: 0,
							sync: false,
						},
					},
					size: {
						value: 5,
						random: true,
						anim: {
							enable: false,
							speed: 4,
							size_min: 0.3,
							sync: false,
						},
					},
					line_linked: {
						enable: false,
						distance: 150,
						color: '#ffffff',
						opacity: 0.4,
						width: 1,
					},
					move: {
						enable: true,
						speed: 0.8,
						direction: 'none',
						random: true,
						straight: false,
						out_mode: 'out',
						bounce: false,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 600,
						},
					},
				},
				interactivity: {
					events: {
						onhover: {
							enable: true,
							mode: 'bubble',
						},
						onclick: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 400,
							line_linked: {
								opacity: 1,
							},
						},
						bubble: {
							distance: 50,
							size: 0,
							duration: 2,
							opacity: 0,
							speed: 3,
						},
						repulse: {
							distance: 100,
							duration: 0.8,
						},
						push: {
							particles_nb: 4,
						},
						remove: {
							particles_nb: 2,
						},
					},
				},
				retina_detect: true,
				background: {
					color: themeType === 'light' ? '#B2C8DF' : '#064663',
					position: '50% 50%',
					repeat: 'no-repeat',
					size: '20%',
				},
			}}
		/>
	);
};

export default ParticlesComponent;
