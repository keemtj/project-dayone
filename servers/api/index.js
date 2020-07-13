const Router = require('koa-router');
const posts = require('./posts');
// const users = require('./users');

const api = new Router();

api.use('/posts', posts.routes());

module.exports = api;
