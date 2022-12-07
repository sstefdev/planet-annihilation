const { sequelize } = require('@config/db');

sequelize.models.Enemy.findAll().then((data) => {
	console.log(`Found ${data.length} enemies`);
	if (data.length === 0) {
		sequelize.models.Enemy.bulkCreate([
			{
				name: 'Darth Vader',
				description:
					'Darth Vader is a fictional character in the Star Wars franchise. He is the primary antagonist of the original trilogy and appears as a major antagonist in the prequel trilogy. He is also the father of Luke Skywalker and Princess Leia Organa, and grandfather of Kylo Ren. He is portrayed by English actor David Prowse in the original trilogy and by Hayden Christensen in the prequel trilogy.',
				image:
					'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcitynews.com.au%2F2022%2Fdarth-vaders-younger-self-steps-into-the-spotlight%2F&psig=AOvVaw1GCeI2p04BPUeFIgTnrCsX&ust=1670506437972000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCqusjP5_sCFQAAAAAdAAAAABAE',
			},
			{
				name: 'Darth Maul',
				description:
					"Darth Maul is a fictional character in the Star Wars franchise. He first appeared in the 1999 film Star Wars: Episode I – The Phantom Menace, portrayed by Ray Park. He is a Dathomirian Zabrak Sith Lord and a member of the Sith Triumvirate. He is the apprentice of Darth Sidious and the archenemy of Obi-Wan Kenobi. He is also the father of Savage Opress and the grandfather of Darth Maul's grandson, Darth Talon.",
				image:
					'https://www.google.com/url?sa=i&url=https%3A%2F%2Fadria.ign.com%2Fgeorge-lucas%2F32707%2Fnews%2Fdzordz-lukas-je-zeleo-da-darth-maul-bude-negativac-u-aktuelnoj-star-wars-trilogiji&psig=AOvVaw3nAhfdzFqItizO8Jo01dhj&ust=1670506549433000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDPxf3P5_sCFQAAAAAdAAAAABAE',
			},
			{
				name: 'Darth Sidious',
				description:
					'Darth Sidious, born Sheev Palpatine and also known simply as the Emperor, was a human male Dark Lord of the Sith and Emperor of the Galactic Empire, ruling from 19 BBY to 4 ABY. Rising to power in the Galactic Senate as the senator of Naboo, the secretive Sith Lord cultivated two identities, Sidious and Palpatine, using both to further his political career and deceive his way into accomplishing his goal.',
				image:
					'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.superherodb.com%2Fdarth-sidious%2F10-10462%2F&psig=AOvVaw0ZJVY1Q1-k6cW-SZHSpS9m&ust=1670507090552000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIimzf_R5_sCFQAAAAAdAAAAABAE',
			},
		]);
	}
});
