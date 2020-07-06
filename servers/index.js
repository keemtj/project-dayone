const Koa = require('koa');
const Router = require('koa-router');

const api = require('./api');

const app = new Koa();
const router = new Router();

// set port
const port = process.env.PORT || 3001;

// set api router
router.use('/api', api.routes());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});
