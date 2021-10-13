const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');

module.exports = {
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@primary-color': '#F68521',
							'@success-color': '#329C00',
							'@error-color': '#FF5A67',
							'@highlight-color': '#FF5A67',
							'@text-color': '#121212',
							'@text-color-secondary': '#121212B2',
							'@border-color-base': '#6D6D6D',
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
