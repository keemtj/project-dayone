const Router = require('koa-router');
const usersCtrl = require('./users.ctrl');

const users = new Router();

// http://localhost:3001/api/users
// ctx.body에 users를 넣음 -> '/' = users를 검색
users.get('/', usersCtrl.users); // 유저 전체 리스트 조회
// ctx.body에 user를 넣음 -> '/:id' = users에서 user를 검색
users.get('/:id', usersCtrl.user); // 특정 유저 조회
users.get('/:id/diaries', usersCtrl.diaries); // 특정 유저의 전체 다이어리 조회
// users.get('/:id/diaries/:id', usersCtrl.diary);

module.exports = users;

// users.post('/', usersCtrl.join); // 회원 가입(??)
