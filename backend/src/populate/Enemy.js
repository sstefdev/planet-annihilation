const { sequelize } = require('@config/db');

sequelize.models.Enemy.findAll().then((data) => {
	if (data.length === 0) {
		sequelize.models.Enemy.bulkCreate([
			{
				name: 'Darth Vader',
				description:
					'Darth Vader is a fictional character in the Star Wars franchise. He is the primary antagonist of the original trilogy and appears as a major antagonist in the prequel trilogy. ',
				image: '/images/enemies/darth-vader.jpeg',
			},
			{
				name: 'Darth Maul',
				description:
					'Darth Maul is a fictional character in the Star Wars franchise. He first appeared in the 1999 film Star Wars: Episode I – The Phantom Menace, portrayed by Ray Park. He is a Dathomirian Zabrak Sith Lord and a member of the Sith Triumvirate. ',
				image: '/images/enemies/darth-maul.jpeg',
			},
			{
				name: 'Darth Sidious',
				description:
					'Darth Sidious, born Sheev Palpatine and also known simply as the Emperor, was a human male Dark Lord of the Sith and Emperor of the Galactic Empire, ruling from 19 BBY to 4 ABY. Rising to power in the Galactic Senate as the senator of Naboo.',
				image: '/images/enemies/darth-sidious.jpeg',
			},
		]);
	}
});
