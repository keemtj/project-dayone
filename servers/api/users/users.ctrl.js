const users = [
  {
    _id: 1,
    userId: 'dorodoro',
    userPw: '123',
    diaries: [],
  },
  {
    _id: 2,
    userId: 'f',
    uesrPw: 'f',
    diaries: [
      {
        id: 1,
        title:
          'Diary Title 1, 일기를 처음으로 쓴 날인데 일기 제목이 너무 길면 어떡하지?',
        content:
          'This is diary 1, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        date: '2020-5-14',
        location: { lat: 37.62197524055062, lng: 127.16017523675508 },
        imagePaths: [
          'https://dictionary.cambridge.org/ko/images/thumb/diary_noun_002_10619.jpg?version=5.0.102',
        ],
        isBookmarked: true,
      },
      {
        id: 2,
        title: 'Diary Title 2',
        content: 'This is diary 2',
        date: '2020-5-21',
        location: { lat: 37.620842424005616, lng: 127.1583774403176 },
        imagePaths: [],
        isBookmarked: false,
      },
      {
        id: 3,
        title: 'Diary Title 3',
        content: 'This is diary 3',
        date: '2020-5-21',
        location: { lat: 37.624915253753194, lng: 127.15122688059974 },
        imagePaths: [],
        isBookmarked: true,
      },
      {
        id: 4,
        title: 'Diary Title 4',
        content: 'This is diary 4',
        date: '2020-6-2',
        location: { lat: 37.624915253753194, lng: 127.15122688059974 },
        imagePaths: [],
        isBookmarked: false,
      },
      {
        id: 5,
        title: 'Diary Title 5',
        content: 'This is diary 5',
        date: '2020-6-6',
        location: { lat: 37.624915253753194, lng: 127.15122688059974 },
        imagePaths: [],
        isBookmarked: true,
      },
      {
        id: 6,
        title: 'Diary Title 6',
        content: 'This is diary 6',
        date: '2020-6-15',
        location: { lat: 37.624915253753194, lng: 127.15122688059974 },
        imagePaths: [
          'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
        ],
        isBookmarked: true,
      },
      {
        id: 7,
        title: 'Diary Title 7',
        content: 'This is diary 7',
        date: '2020-6-19',
        location: { lat: 37.624915253753194, lng: 127.15122688059974 },
        imagePaths: [
          'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
        ],
        isBookmarked: false,
      },
      {
        id: 8,
        title: 'Diary Title 8',
        content: 'This is diary 8',
        date: '2020-6-19',
        location: { lat: 37.524915253753194, lng: 127.15122688059974 },
        imagePaths: [],
        isBookmarked: true,
      },
      {
        id: 9,
        title: 'Diary Title 9',
        content: 'This is diary 9',
        date: '2020-7-1',
        location: { lat: 37.444915253753194, lng: 127.15122688059974 },
        imagePaths: [
          'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
        ],
        isBookmarked: false,
      },
      {
        id: 10,
        title: 'Diary Title 10',
        content: 'This is diary 10',
        date: '2020-7-4',
        location: { lat: 37.444915253753194, lng: 127.15122688059974 },
        imagePaths: [
          'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
        ],
        isBookmarked: false,
      },
      {
        id: 11,
        title: 'Diary Title 11',
        content: 'This is diary 11',
        date: '2020-7-4',
        location: { lat: 37.624915253753194, lng: 127.15122688059974 },
        imagePaths: [
          'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
        ],
        isBookmarked: false,
      },
      {
        id: 12,
        title: 'Diary Title 12',
        content: 'This is diary 12',
        date: '2020-7-5',
        location: { lat: 37.62197524055062, lng: 127.16017523675508 },
        imagePaths: [
          'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
        ],
        isBookmarked: false,
      },
      {
        id: 13,
        title: 'Diary Title 13',
        content: 'This is diary 13',
        date: '2020-7-5',
        location: {},
        imagePaths: [],
        isBookmarked: false,
      },
      {
        id: 14,
        title: 'Diary Title 14',
        content: 'This is diary 14',
        date: '2020-7-5',
        location: {},
        imagePaths: [
          'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
        ],
        isBookmarked: false,
      },
      {
        id: 15,
        title: 'Diary Title 15',
        content: '<p>This is diary 15<p>',
        date: '2020-7-5',
        location: { lat: 37.62197524055062, lng: 127.16017523675508 },
        imagePaths: [
          'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
        ],
        isBookmarked: false,
      },
    ],
  },
];

/*
전체 유저 리스트 조회 
GET /api/users
*/
exports.users = (ctx) => {
  ctx.body = users;
};

/*
특정 유저 조회
GET /api/users/:id
*/
exports.user = (ctx) => {
  const { id } = ctx.params;
  // eslint-disable-next-line no-underscore-dangle
  const user = users.find((u) => u._id.toString() === id);
  if (!user) {
    ctx.status = 404;
    ctx.body = {
      message: '유저가 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = user;
};

exports.diaries = (ctx) => {
  const { id } = ctx.params;
  // eslint-disable-next-line no-underscore-dangle
  const user = users.find((u) => u._id.toString() === id);
  ctx.body = user.diaries;
};

exports.diary = (ctx) => {
  const { id } = ctx.params;
  // eslint-disable-next-line no-underscore-dangle
  const diaries = users.map((user) => user.diaries);
  const diary = diaries.find((d) => d.id.toString() === id);
  ctx.body = diary;
};
/*
새로운 유저 가입(미완성 코드)
POST /api/users
{ _id, userId, userPw, diaries }
*/
// let joinId = 2;
// exports.join = (ctx) => {
//   const { userId, userPw, diaries } = ctx.request.body;
//   joinId += 1;
//   const user = { _id: joinId, userId, userPw, diaries };
//   users.push(user);
//   ctx.body = user;
// };
