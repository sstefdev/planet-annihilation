const { sequelize } = require('@config/db');

sequelize.models.Starship.findAll().then((data) => {
	if (data.length === 0) {
		sequelize.models.Starship.bulkCreate([
			{
				name: 'Death Star',
				description:
					"The Death Star is the Empire's battle station which has ability to use a kyber-crystal powered laser to destroy entire planets. It appears throughout the Star Wars franchise, particularly the original trilogy.",
				image:
					'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.printables.com%2Fmodel%2F57266-death-star-scaled-one-in-two-million&psig=AOvVaw3yswoNEI4E_ujfSNu6XUEc&ust=1670512020948000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCdx67k5_sCFQAAAAAdAAAAABAJ',
				enemy_id: 1,
			},
			{
				name: 'Home One',
				description:
					"Home One made its theatrical appearance in Return of the Jedi as Admiral Ackbar's flagship during the Battle of Endor. According to the old Expanded Universe (now Star Wars Legends) material, the Galactic Empire occupied the planet of Mon Calamari (also known as Mon Cala or Dac).",
				image:
					'https://www.google.com/url?sa=i&url=https%3A%2F%2Fspikeybits.com%2F2015%2F10%2Fits-not-a-trap-armadas-home-one-mc30-unboxed.html&psig=AOvVaw1Wx5l75eBLb3vANb79yzA3&ust=1670512058484000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCIx8Dk5_sCFQAAAAAdAAAAABA4',
				enemy_id: 2,
			},
			{
				name: 'Millennium Falcon',
				description:
					'The Millennium Falcon is a highly modified YT-1300F light freighter captained by smuggler Han Solo (Harrison Ford) and his Wookiee first mate, Chewbacca (Peter Mayhew).',
				image:
					'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.popularmechanics.com%2Fculture%2Fmovies%2Fa30210061%2Fhistory-of-the-millennium-falcon%2F&psig=AOvVaw0jQ2s6X7tZIvZvS5d84fNW&ust=1670512105112000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMit2dbk5_sCFQAAAAAdAAAAABAE',
				enemy_id: 3,
			},
		]);
	}
});
