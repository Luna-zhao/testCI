const commonCtl = require('./common')

const test1 = [
	(ctx, next) => {
		ctx.body = 'first controller'
		next()
	}, commonCtl.common1
]

const test2 = (ctx) => {
	ctx.body = '好的'
  
}

module.exports = { test1, test2 }
