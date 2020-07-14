const Router = require('koa-router');
// const posts = require('./posts');
const users = require('./users');

const api = new Router();

// api.use('/posts', posts.routes());
api.use('/users', users.routes());

module.exports = api;
