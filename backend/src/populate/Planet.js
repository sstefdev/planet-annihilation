const { sequelize } = require('@config/db');

sequelize.models.Planet.findAll().then((data) => {
	if (data.length === 0) {
		sequelize.models.Planet.bulkCreate([
			{
				name: 'Cato Neimoidia',
				description:
					"Cato Neimoidia was a planet in the Cato Neimoidia system, within the Quellor sector of the galaxy's Colonies region. It was a wealthy colony world of the Neimoidians and the base of operations for the Trade Federation.",
				image: '/images/planets/cato-neimoidia.webp',
				enemy_id: 1,
			},
			{
				name: 'Atollon',
				description:
					'Atollon was a remote planet in the Lothal sector of the Outer Rim Territories. It was known to the ancient peoples of the sector and was depicted in their artwork.',
				image: '/images/planets/atollon.webp',
				enemy_id: 2,
			},
			{
				name: 'Kef Bir',
				description:
					'Kef Bir, designated IX3244-C and known as the Ocean Moon of Endor, was an ocean moon orbiting the gas giant Endor in the Endor system.[1] Jannah, a human female freedom fighter who, by the time of the First Order-Resistance War, led a tribe of brave and noble warriors.',
				image: '/images/planets/kef-bir.webp',
				enemy_id: 3,
			},
		]);
	}
});
