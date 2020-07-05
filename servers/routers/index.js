const express = require('express');

const router = express.Router();

const users = [
  { _id: 1, userId: 'dorodoro', userPw: '123' },
  { _id: 2, userId: 'jay', userPw: '123' },
  { _id: 3, userId: 'jimmy', userPw: '123' },
  { _id: 4, userId: 'haeuni', userPw: '123' },
];

const diaries = [
  {
    _id: 1,
    id: 1,
    title: 'asdjfkl',
    content: 'blablablalaalbjaklbjla',
    date: '2020.07.02',
    location: '성수',
  },
  {
    _id: 1,
    id: 2,
    title: '로롱놀오',
    content: 'ㅈ셔ㅑ댖겨ㅑㄷ져갸ㅐ',
    date: '2020.07.04',
    location: '성수',
  },
  {
    _id: 1,
    id: 3,
    title: '캬캬캬캬캬ㅑㅋ',
    content: '가나다라마바사',
    date: '2020.07.04',
    location: '성수',
  },
];

router.get('/', (req, res) => res.json({ username: 'bryan~~~' }));
router.get('/users', (req, res) => res.json(users));
router.get('/diaries', (req, res) => res.json(diaries));

module.exports = router;
