const express = require('express');
const router = express.Router();

let users = [
  { id: 1, userId: 'a', userPw: 'b' },
  { id: 2, userId: 'aa', userPw: 'bb' },
  { id: 3, userId: 'aaa', userPw: 'bbb' },
];

router.get('/', (req, res) => res.json({ username: 'bryan~~~' }));
router.get('/users', (req, res) => res.json(users));

module.exports = router;
