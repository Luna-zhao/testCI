const Router = require('koa-router')
const path = require('path')


const getController = (controller, prefix) => {
	if (typeof controller[controller.length - 1] === 'object') controller.pop()
	const controllerCollect = []
	controller.forEach((item, idx) => {
    
		if (idx === 0) {
			controllerCollect.push(prefix + item)
			return 
		}
		const file = require(`${path.resolve(__dirname, '../controller')}/${item.split('.').shift()}`)
		const detailController = file[item.split('.').pop()]
		typeof detailController === 'function' ? controllerCollect.push(detailController): controllerCollect.push(...detailController)

	})
	return controllerCollect
}


module.exports = (app, routerConfig) => {
	const router = new Router({ prefix: '/api' })

	routerConfig.forEach(element => {
		
		const routerGenerator = {
			get: (...args) => {
				const routerController = getController(args, element.name)
				router.get(...routerController)
			},
			post: (...args) => {
				const routerController = getController(args, element.name)
				router.post(...routerController)
			}
		}
    
		element.router(routerGenerator)
    
	})
  
	app.use(router.routes(), router.allowedMethods())

}