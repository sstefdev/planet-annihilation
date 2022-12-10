const { sequelize } = require('@config/db');

sequelize.models.Enemy.findAll().then((data) => {
	if (data.length === 0) {
		sequelize.models.Enemy.bulkCreate([
			{
				name: 'Darth Vader',
				description:
					'Darth Vader is a fictional character in the Star Wars franchise. He is the primary antagonist of the original trilogy and appears as a major antagonist in the prequel trilogy. He is also the father of Luke Skywalker and Princess Leia Organa, and grandfather of Kylo Ren. He is portrayed by English actor David Prowse in the original trilogy and by Hayden Christensen in the prequel trilogy.',
				image: 'https://assets-prd.ignimgs.com/2022/10/20/starwarsdarthvaderhelmet-1666295658268.jpg',
			},
			{
				name: 'Darth Maul',
				description:
					"Darth Maul is a fictional character in the Star Wars franchise. He first appeared in the 1999 film Star Wars: Episode I – The Phantom Menace, portrayed by Ray Park. He is a Dathomirian Zabrak Sith Lord and a member of the Sith Triumvirate. He is the apprentice of Darth Sidious and the archenemy of Obi-Wan Kenobi. He is also the father of Savage Opress and the grandfather of Darth Maul's grandson, Darth Talon.",
				image:
					'https://upload.wikimedia.org/wikipedia/commons/8/86/Darth_Maul_Cosplayer_at_MCM_Comic_Con_October_2016.jpg',
			},
			{
				name: 'Darth Sidious',
				description:
					'Darth Sidious, born Sheev Palpatine and also known simply as the Emperor, was a human male Dark Lord of the Sith and Emperor of the Galactic Empire, ruling from 19 BBY to 4 ABY. Rising to power in the Galactic Senate as the senator of Naboo, the secretive Sith Lord cultivated two identities, Sidious and Palpatine, using both to further his political career and deceive his way into accomplishing his goal.',
				image: 'https://miro.medium.com/focal/1200/900/49/24/1*Y5rO0iWHQFd8gUd_WuFpqg.jpeg',
			},
		]);
	}
});
