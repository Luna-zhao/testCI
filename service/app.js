const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const path = require('path')
const fs = require('fs.promised')//安装的文件操作模块
const koaStatic = require('koa-static')
const router = require('koa-router')()

const routerCreater = require('./tools/routeCreater')
const routerConfigGenerator = require('./tools/serverRouteCollect')

const app = new Koa()
const port = 8888



const staticPath = './src'


app.use(koaStatic(
	path.join( __dirname,  staticPath)
))


const first = async (Context, next) => {
	Context.response.type = 'html';//指定content type
	Context.response.body = await fs.readFile('./src/html/home.html', 'utf-8')
};
// app.use(new Router().get('/', first))
router.get('/', first)
app.use(router.routes())

//parse post request body
app.use(bodyParser())

// mount routing
// routerCreater(app, routerConfigGenerator())

app.listen(port)
console.log('ok luna~')
