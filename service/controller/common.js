const common = {
	common1: (ctx, next) => {
		ctx.body = 'common controller'
    
		next()
	}
}

module.exports = common
