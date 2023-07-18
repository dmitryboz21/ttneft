
if (typeof (window.dmpageCharts) === 'undefined') {
	window.dmpageCharts = [];
}
window.dmpageCharts['chart-doughnut-1-postfix'] = '%';
window.dmpageCharts['chart-doughnut-1'] = {
	labels: [
		'Разведка и добыча',
		'Цифровое развитие',
		'Трейдинг и логистика',
		'Нефтегазохимия',
		'Энергетика',
		'Композитные материалы'
	],
	datasets: [{
		label: '',
		data: [30, 20, 20, 20, 5, 5],

	}]
};


window.dmpageCharts['chart-bar-1-postfix'] = '%';
window.dmpageCharts['chart-bar-1'] = {
	labels: [
		'Разведка и добыча',
		'Цифровое развитие',
		'Трейдинг и логистика',
		'Нефтегазохимия',
		'Энергетика',
		'Композитные материалы',
		'Нефтегазохимия 2',
		'Энергетика 2',
		'Композитные материалы 2'
	],

	datasets: [{
		data: [300, 50, 100, 500, 50, 100, 500, 50, 100],
	}]
};


/*
window.dmpageCharts['chart-bar-test-1-postfix'] = ' млн. куб. м';
window.dmpageCharts['chart-bar-test-1'] = { 
	labels: [
		'2021',
	],
	
	datasets: [{
		data: [
			22,
		],
	}]
};
window.dmpageCharts['chart-bar-test-2-postfix'] = ' млн. куб. м';
window.dmpageCharts['chart-bar-test-2'] = { 
	labels: [
		'2021',
		'2021',
	],
	
	datasets: [{
		data: [
			22,
			22,
		],
	}]
};
window.dmpageCharts['chart-bar-test-3-postfix'] = ' млн. куб. м';
window.dmpageCharts['chart-bar-test-3'] = { 
	labels: [
		'2021',
		'2021',
		'2021',
	],
	
	datasets: [{
		data: [
			22,
			22,
			22,
		],
	}]
};
window.dmpageCharts['chart-bar-test-4-postfix'] = ' млн. куб. м';
window.dmpageCharts['chart-bar-test-4'] = { 
	labels: [
		'2021',
		'2021',
		'2021',
		'2021',
	],
	
	datasets: [{
		data: [
			22,
			22,
			22,
			22,
		],
	}]
};
window.dmpageCharts['chart-bar-test-5-postfix'] = ' млн. куб. м';
window.dmpageCharts['chart-bar-test-5'] = { 
	labels: [
		'2021',
		'2021',
		'2021',
		'2021',
		'2021',
	],
	
	datasets: [{
		data: [
			22,
			22,
			22,
			22,
			22,
		],
	}]
};
window.dmpageCharts['chart-bar-test-6-postfix'] = ' млн. куб. м';
window.dmpageCharts['chart-bar-test-6'] = { 
	labels: [
		'2021',
		'2021',
		'2021',
		'2021',
		'2021',
		'2021',
	],
	
	datasets: [{
		data: [
			22,
			22,
			22,
			22,
			22,
			22,
		],
	}]
};
window.dmpageCharts['chart-bar-test-7-postfix'] = ' млн. куб. м';
window.dmpageCharts['chart-bar-test-7'] = { 
	labels: [
		'2021',
		'2021',
		'2021',
		'2021',
		'2021',
		'2021',
		'2021',
	],
	
	datasets: [{
		data: [
			22,
			22,
			22,
			22,
			22,
			22,
			22,
		],
	}]
};
window.dmpageCharts['chart-bar-test-8-postfix'] = ' млн. куб. м';
window.dmpageCharts['chart-bar-test-8'] = { 
	labels: [
		'2021',
		'2021',
		'2021',
		'2021',
		'2021',
		'2021',
		'2021',
		'2021',
	],
	
	datasets: [{
		data: [
			22,
			22,
			22,
			22,

			22,
			22,
			22,
			22,
		],
	}]
};
window.dmpageCharts['chart-bar-test-9-postfix'] = ' млн. куб. м';
window.dmpageCharts['chart-bar-test-9'] = { 
	labels: [
		'2021',
		'2021',
		'2021',

		'2021',
		'2021',
		'2021',

		'2021',
		'2021',
		'2021',
	],
	
	datasets: [{
		data: [
			22,
			22,
			22,

			22,
			22,
			22,

			22,
			22,
			22,
		],
	}]
};

window.dmpageCharts['chart-bar-test-10-postfix'] = ' млн. куб. м';
window.dmpageCharts['chart-bar-test-10'] = { 
	labels: [
		'2021',
		'2021',
		'2021',
		'2021',
		
		'2021',
		'2021',

		'2021',
		'2021',
		'2021',
		'2021',
	],
	
	datasets: [{
		data: [
			22,
			22,
			22,
			22,

			22,
			22,

			22,
			22,
			22,
			22,
		],
	}]
};
window.dmpageCharts['chart-bar-test-11-postfix'] = ' млн. куб. м';
window.dmpageCharts['chart-bar-test-11'] = { 
	labels: [
		'2021',
		'2021',
		'2021',
		'2021',
		
		'2021',
		'2021',

		'2021',
		'2021',
		'2021',
		'2021',
		'2021',
	],
	
	datasets: [{
		data: [
			22,
			22,
			22,
			22,

			22,
			22,

			22,
			22,
			22,
			22,
			22,
		],
	}]
};
window.dmpageCharts['chart-bar-test-12-postfix'] = ' млн. куб. м';
window.dmpageCharts['chart-bar-test-12'] = { 
	labels: [
		'2021',
		'2021',
		'2021',
		'2021',
		
		'2021',
		'2021',

		'2021',
		'2021',
		'2021',
		'2021',
		'2021',
		'2021',
	],
	
	datasets: [{
		data: [
			22,
			22,
			22,
			22,

			22,
			22,

			22,
			22,
			22,
			22,

			22,
			22,
		],
	}]
};*/


if (typeof (window.dmpageCharts) === 'undefined') {
	window.dmpageCharts = [];
}
window.dmpageCharts['chart-doughnut-11-1-postfix'] = '%';
window.dmpageCharts['chart-doughnut-11-1'] = {
	labels: [
		'Нефтепереработка',
		'Прочие СП/ДЗО',
		'Разведка и добыча',
		'Розничный бизнес',
		'Трейдинг и логистика',
		'Энергетика',
		'Социальное развитие',
		'Цифровое развитие',
		'Нефтегазохимия',
		'Композитные материалы',
		'Машиностроение'
	],
	datasets: [{
		label: '',
		data: [
			49.4,
			1.0,
			41.7,
			1.4,
			0.0,
			1.4,
			0.4,
			0.0,
			3.6,
			0.3,
			0.8],

	}]
};




/*

window.dmpageCharts['chart-doughnut-11-2-postfix'] = '%';
window.dmpageCharts['chart-doughnut-11-2'] = {
	labels: [
'На сохранение биоразнообразия и охрану природных территорий (0,3  млн. руб)',
'На научно-исследовательскую деятельность и разработки по снижению негативных антропогенных воздействий на окружающую среду (51 млн. руб)',
'На охрану атмосферного воздуха и предотвращение изменения климата (4003 млн. руб)',
'На другие направления деятельности в сфере охраны окружающей среды (53 млн. руб)',
'На сбор и очистку сточных вод (2124 млн. руб)',
'На обращение с отходами (708 млн. руб)',
'На защиту и реабилитацию земель, поверхностных и подземных вод (3884 млн. руб)',
'На обеспечение радиационной безопасности окружающей среды (6,9 млн. руб)',
'На защиту окружающей среды и шумового, вибрационного и других видов физического воздействия (1,6 млн. руб)',
		
		
	],
	datasets: [{
		label: '',
		data: [1.0,
			41.7,
			1.4,
			0.0,
			1.4,
			0.4,
			0.0,
			3.6,
			0.3,
			0.8],
		
	}]
};

*/




window.dmpageCharts['chart-doughnut-11-2-postfix'] = ' млн. руб';
window.dmpageCharts['chart-doughnut-11-2'] = {
	labels: [
		'На сохранение биоразнообразия и охрану природных территорий',
		'На научно-исследовательскую деятельность и разработки по снижению<br> негативных антропогенных воздействий на окружающую среду',
		'На охрану атмосферного воздуха и предотвращение изменения климата',
		'На другие направления деятельности в сфере охраны окружающей среды',
		'На сбор и очистку сточных вод',
		'На обращение с отходами',
		'На защиту и реабилитацию земель, поверхностных и подземных вод',
		'На обеспечение радиационной безопасности окружающей среды',
		'На защиту окружающей среды и шумового, вибрационного и других видов физического воздействия',


	],
	datasets: [{
		label: '',
		data: [0.3,
			51,
			4003,
			53,
			2124,
			708,
			3884,
			6.9,
			1.6,],

	}]
};



if (typeof (window.dmpageCharts) === 'undefined') {
	window.dmpageCharts = [];
}
window.dmpageCharts['chart-doughnut-15-1-postfix'] = '%';
window.dmpageCharts['chart-doughnut-15-1'] = {
	labels: [
		'Диоксид серы',
		'Оксид углерода',
		'Оксид азота (в пересчете на NO2) ',
		'Углеводороды (без летучих органических соединений)',
		'Летучие органические соединения (ЛОС)',
		'Прочие',
	],
	datasets: [{
		label: '',
		data: [
			10,
			20,
			9,
			13,
			47,
			1],

	}]
};









window.dmpageCharts['chart-doughnut-15-2-postfix'] = '%';
window.dmpageCharts['chart-doughnut-15-2'] = {
	labels: [
		'Социальное развитие',
		'Разведка и добыча',
		'Машиностроение',
		'Нефтегазопереработка',
		'Розничный бизнес',
		'Композиционные материалы',
		'Энергетика',
		'Нефтегазохимия',
		'Прочие СП/ПСО',
	],
	datasets: [{
		label: '',
		data: [
			0.01,
			68.98,
			0.24,
			19.17,
			2.41,
			0.50,
			3.42,
			5.16,
			0.11,
		],

	}]
};




window.dmpageCharts['chart-bar-15-3-postfix'] = ' млн. куб. м';
window.dmpageCharts['chart-bar-15-3'] = {
	labels: [
		'2021',
		'2022',
		'2023',
	],
	datasets: [{
		data: [22, 38, 44],
	}]
};

/*

window.dmpageCharts['chart-bar-15-4-postfix'] = '%';
window.dmpageCharts['chart-bar-15-4'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],	
	datasets: [{
		data: [95.98,96.13,44],
	}]
};

*/

window.dmpageCharts['chart-bar-15-5-postfix'] = ' млн. куб. м.';
window.dmpageCharts['chart-bar-15-5'] = {
	labels: [
		'2021',
		'2022',
		'2023',
	],
	datasets: [{
		label: 'Из поверхностных источников',
		stack: 'Stack 0',
		data: [64.34,
			62.30,
			61.11,],
	}, {
		label: 'Из муниципальных систем водоснабжения',
		stack: 'Stack 1',
		data: [2.45,
			3.15,
			3.18,],
	}, {
		label: 'Из других источников',
		stack: 'Stack 2',
		data: [6.84,
			4.79,
			2.38,],
	}, {
		label: 'Из подземных источников',
		stack: 'Stack 3',
		data: [1.22,
			1,
			1.21,],
	}, {
		label: 'Дождевые воды, собираемые и сохраняемые организацией',
		stack: 'Stack 4',
		data: [0.36,
			0.37,
			0.05,],
	}, {
		label: 'Забор и получение воды на собственные нужды',
		stack: 'Stack 5',
		data: [75.21,
			71.61,
			67.93,],
	},
	]
};




window.dmpageCharts['chart-doughnut-15-6-postfix'] = '%';
window.dmpageCharts['chart-doughnut-15-6'] = {
	labels: [
		'Разведка и добыча',
		'Социальное развитие',
		'Цифровое развитие',
		'Композитные материалы',
		'Нефтегазохимия',
		'Прочие',
		'Энергетика',
		'Розничный бизнес',
		'Нефтегазопереработка',
		'Машиностроение',
	],
	datasets: [{
		label: '',
		data: [
			55.34,
			0.66,
			0.01,
			0.33,
			15.04,
			0.33,
			21.27,
			0.50,
			5.99,
			0.53,
		],

	}]
};





window.dmpageCharts['chart-doughnut-15-7-postfix'] = '%';
window.dmpageCharts['chart-doughnut-15-7'] = {
	labels: [
		'из подземных источников',
		'из муниципальных систем снабжения',
		'из других источников',
		'дождевые воды, собираемые организацией',
		'из поверхностных источников',
	],
	datasets: [{
		label: '',
		data: [
			1.8,
			4.6,
			3.5,
			0.1,
			90.0,

		],

	}]
};







window.dmpageCharts['chart-bar-15-8-postfix'] = ' млн. куб. м.';
window.dmpageCharts['chart-bar-15-8'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'Использовано воды всего',
			stack: 'Stack 0',
			data: [
				75.21,
				71.61,
				67.93,
			],
		},
		{
			label: 'закачка для ППД',
			stack: 'Stack 1',
			data: [
				12.84,
				14.56,
				17.25,
			],
		},
		{
			label: 'на хозяйственно-питьевые нужды',
			stack: 'Stack 2',
			data: [
				5.30,
				5.50,
				3.45,
			],
		},
		{
			label: 'на производственные нужды',
			stack: 'Stack 3',
			data: [
				54.24,
				45.07,
				41.99,
			],
		},
		{
			label: 'прочие',
			stack: 'Stack 4',
			data: [
				2.83,
				6.48,
				5.24,
			],
		},
	]
};















window.dmpageCharts['chart-bar-15-9-postfix'] = [' млн. куб. м.', '%'];
window.dmpageCharts['chart-bar-15-9'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'общий объем оборотного и повторного водоснабжения',
			stack: 'Stack 0',
			data: [
				1014.9,
				1144.0,
				1111.4,
			],
		},
		{
			label: 'доля оборотной и повторно-последовательной используемой воды',
			stack: 'Stack 1',
			data: [
				93.1,
				94.1,
				94.2,
			],
		},
	]
};






window.dmpageCharts['chart-bar-17-1-postfix'] = ' млн м<sup>3</sup>';
window.dmpageCharts['chart-bar-17-1'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'общий объем оборотного и повторного водоснабжения',
			data: [
				14.4,
				10.7,
				7.9,
			],
		},

	]
};







window.dmpageCharts['chart-bar-18-1-postfix'] = ' тыс. т';
window.dmpageCharts['chart-bar-18-1'] = {
	labels: [
		'2022',
		'2021',
		'2020',
	].reverse(),
	datasets: [
		{
			label: 'Образовано отходов в собственном производстве',
			stack: 'Stack 0',
			data: [
				307,
				218,
				219,
			].reverse(),
		}, {
			label: 'Передано сторонним предприятиям',
			stack: 'Stack 1',
			data: [
				354,
				187,
				195,
			].reverse(),
		}, {
			label: 'Использовано отходов непосредственно предприятиями Группы “Татнефть”',
			stack: 'Stack 2',
			data: [
				47,
				43,
				39,
			].reverse(),
		},

	]
};







window.dmpageCharts['chart-doughnut-18-2-postfix'] = '%';
window.dmpageCharts['chart-doughnut-18-2'] = {
	labels: [
		'1 класс опасности <br> (0,004 тыс.т.)',
		'2 класс опасности <br> (0,045 тыс.т.)',
		'3 класс опасности <br> (64,144 тыс.т.)',
		'4 класс опасности <br> (139,326 тыс.т.)',
		'5 класс опасности <br> (103,482 тыс. т.)',
	],
	datasets: [{
		label: '',
		data: [
			0.001,
			0.015,
			20.894,
			45.383,
			33.707,
		],

	}]
};
window.dmpageCharts['chart-doughnut-18-3-postfix'] = '%';
window.dmpageCharts['chart-doughnut-18-3'] = {
	labels: [
		'Машиностроение',
		'Нефтегазопереработка',
		'Розничный бизнес',
		'Композитные материалы',
		'Энергетика',
		'Прочие (СП/ПСО)',
		'Социальное развитие',
		'Цифровое развитие',
		'Трейдинг и логистика',
		'Нефтегазохимия',
		'Разведка и добыча',
	],
	datasets: [{
		label: '',
		data: [
			14,
			5,
			10,
			1,
			1,
			10,
			1,
			0.136,
			0.006,
			4,
			54,

		],

	}]
};










window.dmpageCharts['chart-bubbles-23-1-postfix'] = ['', '%'];
window.dmpageCharts['chart-bubbles-23-1'] = {
	labels: [
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'лояльности (ENPS)',
			backgroundColor: "#F04043",
			borderColor: "#F04043",
			data: [
				{
					x: 2021,
					y: 20 + 68.5,
					r: 30
				},
				{
					x: 2022,
					y: 20 + 68.5,
					r: 35
				},
			],
		},
		{
			label: 'интегральный индекс удовлетворенности',
			backgroundColor: "#BBBBBB",
			borderColor: "#BBBBBB",
			data: [
				{
					x: 2021,
					y: 20 + (68.5 / 2),
					r: 68.5
				},
				{
					x: 2022,
					y: 20 + (68.5 / 2),
					r: 68.5
				},
			],
		},

	]
};













window.dmpageCharts['chart-bar-23-2-postfix'] = '%';
window.dmpageCharts['chart-bar-23-2'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'Мужчины',
			stack: 'Stack 0',
			//backgroundColor: '#00B475',
			data: [
				73,
				75,
				77,
			],
		}, {
			label: 'Женщины',
			stack: 'Stack 1',
			//backgroundColor: '#F04043',
			data: [
				27,
				25,
				23,
			],
		},

	]
};






window.dmpageCharts['chart-bar-23-3-postfix'] = ' тыс. чел';
window.dmpageCharts['chart-bar-23-3'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'По возрастным группам',
			//backgroundColor: '#00B475',
			data: [
				62.8,
				64.9,
				66.1,
			],
		}

	]
};













//По возрастным группам, тыс. чел
window.dmpageCharts['chart-bar-23-4-postfix'] = ' тыс. чел';
window.dmpageCharts['chart-bar-23-4'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'До 30 лет',
			stack: 'Stack 0',
			//backgroundColor: '#00B475',
			data: [
				8.9,
				8.7,
				9.4,
			],
		}, {
			label: 'От 30 до 50 лет',
			stack: 'Stack 1',
			//backgroundColor: '#F04043',
			data: [
				39.3,
				40.8,
				40.7,
			],
		}, {
			label: 'Старше 50 лет',
			stack: 'Stack 2',
			//backgroundColor: '#F04043',
			data: [
				14.6,
				15.3,
				15.9,
			],
		},

	]
};







//По странам деятельности, %
window.dmpageCharts['chart-bar-23-5-postfix'] = '%';
window.dmpageCharts['chart-bar-23-5'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'Российская федерация',
			backgroundColor: '#00B475',
			data: [
				96,
				95,
				98,
			],
		},

	]
};







//Работники с ограниченными возможностями здоровья

window.dmpageCharts['chart-bar-23-6-postfix'] = '';
window.dmpageCharts['chart-bar-23-6'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'Мужчины',
			stack: 'Stack 0',
			//backgroundColor: '#00B475',
			data: [
				337,
				387,
				306,
			],
		}, {
			label: 'Женщины',
			stack: 'Stack 1',
			//backgroundColor: '#F04043',
			data: [
				243,
				257,
				218,
			],
		},

	]
};
//По полу и доля к общей списочной численности
window.dmpageCharts['chart-bar-23-7-postfix'] = '%';
window.dmpageCharts['chart-bar-23-7'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'Мужчины',
			stack: 'Stack 0',
			//backgroundColor: '#00B475',
			data: [10,
				12,
				14,
			],
		}, {
			label: 'Женщины',
			stack: 'Stack 1',
			//backgroundColor: '#F04043',
			data: [9,
				10,
				9,
			],
		},

	]
};




//По странам деятельности

window.dmpageCharts['chart-bar-23-8-postfix'] = '%';
window.dmpageCharts['chart-bar-23-8'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'Российская Федерация',
			stack: 'Stack 0',
			//backgroundColor: '#00B475',
			data: [
				523,
				1007,
				72,


			],
		}, {
			label: 'Прочие страны',
			stack: 'Stack 1',
			//backgroundColor: '#F04043',
			data: [
				11361,
				13456,
				15374,


			],
		},

	]
};



//Текучесть кадров


window.dmpageCharts['chart-bar-23-9-postfix'] = '%';
window.dmpageCharts['chart-bar-23-9'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'Текучесть кадров',
			stack: 'Stack 0',
			//backgroundColor: '#00B475',
			data: [
				9,
				12,
				12,
			],
		},

	]
};


//Социальные выплаты работникам, млн руб. (по Коллективному договору) 
window.dmpageCharts['chart-bar-29-1-postfix'] = ' млн руб.';
window.dmpageCharts['chart-bar-29-1'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'Социальные выплаты работникам',
			data: [
				438,
				441,
				551,




			],
		},

	]
};


//Взносы на негосударственное пенсионное обеспечение, млн руб.
window.dmpageCharts['chart-bar-29-2-postfix'] = ' млн руб.';
window.dmpageCharts['chart-bar-29-2'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'Взносы на негосударственное пенсионное обеспечение',
			data: [
				151,
				231,
				548,
			],
		},

	]
};



window.dmpageCharts['chart-bar-200-1-postfix'] = '%';
window.dmpageCharts['chart-bar-200-1'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'Использовано воды всего',
			//stack: 'Stack 0',
			data: [
				72.5,
				48.2,
				40.5,
			],
		},
	]
};




window.dmpageCharts['chart-bar-200-2-postfix'] = ' млн деревьев в год';
window.dmpageCharts['chart-bar-200-2'] = {
	labels: [
		'2022',
		'2021',
		'2020',
		'2019',
		'2018',
		'2017',
		'2016',
		'2015',
		'2014',
		'2013',
	].reverse(),
	datasets: [
		{
			label: 'Динамика посадок по группе "Татнефть"',
			//stack: 'Stack 0',
			data: [
				2.2,
				7.8,
				2.0,
				1.6,
				1.4,
				1.2,
				1.1,
				1.2,
				1.3,
				0.7,
			].reverse(),
		},
	]
};











window.dmpageCharts['chart-bar-200-3-postfix'] = ' млн руб.';
window.dmpageCharts['chart-bar-200-3'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'Расходы на охрану труда и обеспечение промышленной и пожарной безопасности',
			//stack: 'Stack 0',
			data: [
				14822.8,
				7523.9,
				10264.5,
			],
		},
	]
};



window.dmpageCharts['chart-bar-200-4-1-postfix'] = ' тыс. руб.';
window.dmpageCharts['chart-bar-200-4-1'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'Всего расходов',
			stack: 'Stack 0',
			data: [
				1370504.00,
				1667188.00,
				1930049.00,
			],
		},
		{
			label: 'Расходы на одного работника',
			stack: 'Stack 1',
			data: [
				26.6,
				26.7,
				29.1,
			],
		},
	]
};


window.dmpageCharts['chart-doughnut-200-4-2-postfix'] = '';
window.dmpageCharts['chart-doughnut-200-4-2'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],



	datasets: [{
		label: 'Количество рабочих мест',
		data: [
			5793,
			4391,
			12964,



		],

	}]
};










window.dmpageCharts['chart-bar-200-4-3-postfix'] = ' млн руб.';
window.dmpageCharts['chart-bar-200-4-3'] = {
	labels: [
		'2020',
		'2021',
		'2022',
	],
	datasets: [
		{
			label: 'Затраты на проведение медицинских осмотров',
			data: [
				90.1,
				136.9,
				195.9,
			],
		},
	]
};








window.dmpageCharts['chart-doughnut-200-5-1-postfix'] = ' млн.руб.';
window.dmpageCharts['chart-doughnut-200-5-1'] = {
	labels: [
		'Развитие территорий',
		'Культура',
		'Здравоохранение',
		'Образование',
	],
	datasets: [
		{
			label: 'в 2022 году',
			data: [
				295,
				225,
				475,
				450,
			],
		},
	]
};

window.dmpageCharts['chart-doughnut-200-5-2-postfix'] = '';
window.dmpageCharts['chart-doughnut-200-5-2'] = {
	labels: [
		'школьников',
		'преподавателей',

	],
	datasets: [
		{
			label: 'призеры',
			data: [
				238,
				187,
			],
		},
	]
};



window.dmpageCharts['chart-doughnut-200-5-3-postfix'] = ' шт.';
window.dmpageCharts['chart-doughnut-200-5-3'] = {
	labels: [
		'Наука и образование',
		'Развитие культуры и искусства, сохранение традиций',
		'Здравоохранение',
		'Спорт и здоровый образ жизни',
		'Городская инфраструктура',

	],
	datasets: [
		{
			label: '',
			data: [
				114,
				33,
				23,
				18,
				78,
			],
		},
	]
};







window.dmpageCharts['chart-doughnut-200-5-4-postfix'] = ' шт.';
window.dmpageCharts['chart-doughnut-200-5-4'] = {
	labels: [
		'Наука и образование',
		'Развитие культуры и искусства, сохранение традиций',
		'Здравоохранение',
		'Спорт и здоровый образ жизни',
		'Городская инфраструктура',

	],
	datasets: [
		{
			label: '',
			data: [
				28,
				40,
				42,
				24,
				63,


			],
		},
	]
};



window.dmpageCharts['chart-doughnut-200-5-5-postfix'] = ' шт.';
window.dmpageCharts['chart-doughnut-200-5-5'] = {
	labels: [
		'Наука и образование',
		'Развитие культуры и искусства, сохранение традиций',
		'Здравоохранение',
		'Спорт и здоровый образ жизни',
		'Городская инфраструктура',
	],
	datasets: [
		{
			label: '',
			data: [
				18,
				119,
				4,
				21,
				20,


			],
		},
	]
};











window.dmpageCharts['chart-doughnut-200-5-6-postfix'] = '';
window.dmpageCharts['chart-doughnut-200-5-6'] = {
	labels: [
		'ДОУ семи вступивших в проект районов юго-востока республики',
'сотрудников ДОУ',
'детей 2-7 лет и их семей',
	],
	datasets: [
		{
			label: 'Охват проектом',
			data: [
				21,
				1309,
				2655,

			],
		},
	]
};









window.dmpageCharts['chart-bar-200-5-7-postfix'] = ' км/км2 ';
window.dmpageCharts['chart-bar-200-5-7'] = {
	labels: [
		'Альметьевск',
		'Москва',
		'Санкт-Петербург',
	],
	datasets: [
		{
			label: 'Сравнение удельной протяженности сети велодорожек',
			data: [
				0.97,
				0.14,
				0.09,
			],
		},
	]
};









