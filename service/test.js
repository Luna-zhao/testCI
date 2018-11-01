import { Selector } from 'testcafe'
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const path = require('path')
const fs = require('fs.promised')//安装的文件操作模块
const koaStatic = require('koa-static')
const router = require('koa-router')()

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
console.log('ok luna, nice to meet u ya~')
fixture`test starting`
  .page`http://45.63.123.160:49001/`;

  test('first page', async t => {
    const element = Selector('.luna').exists;
    console.log(element);
    
    await t
    .expect(element).ok();
  })