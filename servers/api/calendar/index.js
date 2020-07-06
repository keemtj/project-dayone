const Router = require('koa-router');

const calendar = new Router();

const printInfo = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
};

calendar.get('/', printInfo);
calendar.post('/', printInfo);
calendar.get('/:id', printInfo);
calendar.delete('/:id', printInfo);
calendar.put('/:id', printInfo);
calendar.patch('/:id', printInfo);
module.exports = calendar;
