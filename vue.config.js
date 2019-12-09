module.exports = {
	publicPath: "./",
	pages: {
		'index': {
			entry: './src/pages/Home/main.ts',
			template: 'public/index.html',
			title: 'Home',
			chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
		},
		'nnn': {
			entry: './src/pages/NNN/main.ts',
			template: 'public/index.html',
			title: 'NNN',
			chunks: [ 'chunk-vendors', 'chunk-common', 'nnn' ]
		},
		'game': {
			entry: './src/pages/Game/main.ts',
			template: 'public/index.html',
			title: 'Game',
			chunks: [ 'chunk-vendors', 'chunk-common', 'game' ]
		}
	},
	devServer: {
		watchOptions: {
			poll: true
		}
	},
	chainWebpack: config => config.optimization.minimize(false)
}