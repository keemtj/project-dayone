const Koa = require('koa');
const Router = require('koa-router'); // 1
const bodyParser = require('koa-bodyparser');

const api = require('./api'); // 2

const app = new Koa();
const router = new Router(); // 3

// set port
const port = process.env.PORT || 3001;

// set api router
router.use('/api', api.routes()); // 4

// apply bodyParser
app.use(bodyParser());

// apply router in app instance
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});
