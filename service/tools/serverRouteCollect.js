const fs = require('fs')
const path = require('path')

const baseFolder = path.resolve(__dirname, '../route')

const serverRouteCollect = () => {
	const routeConfig = []
	fs.readdirSync(baseFolder)
		.forEach((item) => {      
			const name = item.split('.')
			name.pop()
			routeConfig.push({
				name: `/${name.join('')}`,
				router: require(`${baseFolder}/${item}`)
			})
		})
	return routeConfig
}

module.exports = serverRouteCollect