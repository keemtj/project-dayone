const Router = require('koa-router');
const calendar = require('./calendar');

const api = new Router();

api.use('/calendar', calendar.routes());

module.exports = api;
