const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');
// const postsCtrl = require('./diaries.ctrl');

const posts = new Router();
posts.get('/', postsCtrl.list); // 전체 다이어리 리스트 조회
posts.post('/', postsCtrl.write); // 다이어리 작성
posts.get('/:id', postsCtrl.read); // 특정 다이어리 조회
posts.delete('/:id', postsCtrl.remove); // 특정 다이어리 제거
posts.patch('/:id', postsCtrl.update); // 특정 다이어리 수정
posts.put('/:id', postsCtrl.replace); // 특정 다이어리 교체(거의 안씀)

// users.get('/:id/diareis/');
// users.post('/:id/diareis/');
// users.get('/:id/diareis/:id');
// users.delete('/:id/diareis/:id');
// users.patch('/:id/diareis/:id');
module.exports = posts;
