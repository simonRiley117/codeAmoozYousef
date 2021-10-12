const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@primary-color': '#A37BF6',
							'@success-color': '#52c41a',
							'@error-color': '#DC0000',
							'@highlight-color': '#DC0000',
							'@text-color': '#212121',
							'@text-color-secondary': '#707070',
							'@border-color-base': '#c7c7c7',
							'@border-radius-base': '1rem',
						},
						javascriptEnabled: true,
					},
				},
			},
		},
		{
			plugin: CracoAlias,
			options: {
				source: 'jsconfig',
				baseUrl: './',
			},
		},
	],
};
