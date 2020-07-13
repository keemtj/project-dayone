const Router = require('koa-router');
const posts = require('./posts');
// const users = require('./users');

const api = new Router();

api.use('/users', posts.routes());

module.exports = api;
