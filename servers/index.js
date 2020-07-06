const Koa = require('koa');

const app = new Koa();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});
