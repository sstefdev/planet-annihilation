const { sequelize } = require('@config/db');

sequelize.models.Starship.findAll().then((data) => {
	if (data.length === 0) {
		sequelize.models.Starship.bulkCreate([
			{
				name: 'Death Star',
				description:
					"The Death Star is the Empire's battle station which has ability to use a kyber-crystal powered laser to destroy entire planets. It appears throughout the Star Wars franchise, particularly the original trilogy.",
				image:
					'https://static.wikia.nocookie.net/starwars/images/7/70/DSI-HDapproach.png/revision/latest/scale-to-width-down/500?cb=20130221005853',
				enemy_id: 1,
			},
			{
				name: 'Home One',
				description:
					"Home One made its theatrical appearance in Return of the Jedi as Admiral Ackbar's flagship during the Battle of Endor. According to the old Expanded Universe (now Star Wars Legends) material, the Galactic Empire occupied the planet of Mon Calamari (also known as Mon Cala or Dac).",
				image:
					'https://static.wikia.nocookie.net/starwars/images/8/8e/HomeOne-SWArmada.jpg/revision/latest/scale-to-width-down/250?cb=20160926061820',
				enemy_id: 2,
			},
			{
				name: 'Millennium Falcon',
				description:
					'The Millennium Falcon is a highly modified YT-1300F light freighter captained by smuggler Han Solo (Harrison Ford) and his Wookiee first mate, Chewbacca (Peter Mayhew).',
				image:
					'https://static.wikia.nocookie.net/starwars/images/0/00/Han_Solo_YT-1300_XWM-HotR.png/revision/latest/scale-to-width-down/250?cb=20171118230718',
				enemy_id: 3,
			},
		]);
	}
});
