const express = require('express');

const router = express.Router();

const users = [
  { _id: 1, userId: 'a', userPw: 'b' },
  { _id: 2, userId: 'aa', userPw: 'bb' },
  { _id: 3, userId: 'aaa', userPw: 'bbb' },
];

const diaries = [
  {
    _id: 1,
    id: 1,
    title: 'lalala',
    content: 'blablablalaalbjaklbjla',
    date: '2020.07.12',
    location: '성수',
  },
  {
    _id: 1,
    id: 2,
    title: '로롱놀오',
    content: 'ㅈ셔ㅑ댖겨ㅑㄷ져갸ㅐ',
    date: '2020.07.12',
    location: '성수',
  },
  {
    _id: 1,
    id: 3,
    title: '캬캬캬캬캬ㅑㅋ',
    content: '가나다라마바사',
    date: '2020.07.12',
    location: '성수',
  },
];

router.get('/', (req, res) => res.json({ username: 'bryan~~~' }));
router.get('/users', (req, res) => res.json(users));
router.get('/diaries', (req, res) => res.json(diaries));

// GET

// DELETE

// POST

// PATCH

// 404 Error

// generate id or _id

module.exports = router;
