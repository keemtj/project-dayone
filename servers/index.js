const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

// set port
const port = process.env.PORT || 3001;

// set api router
router.use('/api', api.routes());

// apply bodyParser
app.use(bodyParser());

// apply router in app instance
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});
