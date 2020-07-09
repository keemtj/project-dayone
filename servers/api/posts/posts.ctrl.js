let diaryId = 3;

const diaries = [
  {
    _id: 1,
    id: 1,
    title: 'asdjfkl',
    body: 'blablablalaalbjaklbjla',
    date: '2020.07.02',
    location: '성수',
  },
  {
    _id: 1,
    id: 2,
    title: '로롱놀오test',
    body: 'ㅈ셔ㅑ댖겨ㅑㄷ져갸ㅐ',
    date: '2020.07.04',
    location: '성수',
  },
  {
    _id: 1,
    id: 3,
    title: '캬캬캬캬캬ㅑㅋ',
    body: '가나다라마바사',
    date: '2020.07.04',
    location: '성수',
  },
];

// const users = [
//   {
//     id: 1,
//     userId: 'asdf',
//     userPw: '1234',
//     active: false,
//     diaries: [
//       {
//         // _id: 1,
//         id: 1,
//         title: 'asdjfkl',
//         body: 'blablablalaalbjaklbjla',
//         date: '2020.07.02',
//         location: { lat: 12312.1341, lng: 12093.123 },
//         imagePaths: ['adsfa.png', 'adfa.png'],
//         isBookmarked: false,
//       },
//       {
//         // _id: 1,
//         id: 2,
//         title: '로롱놀오',
//         body: 'ㅈ셔ㅑ댖겨ㅑㄷ져갸ㅐ',
//         date: '2020.07.04',
//         location: '성수',
//         imagePaths: ['adsfa.png', 'adfa.png'],
//         isBookmarked: false,
//       },
//       {
//         // _id: 1,
//         id: 3,
//         title: '캬캬캬캬캬ㅑㅋ',
//         body: '가나다라마바사',
//         date: '2020.07.04',
//         location: '성수',
//         imagePaths: ['adsfa.png', 'adfa.png'],
//         isBookmarked: false,
//       },
//     ],
//   },
// ];

/* 전체 diary list 조회
GET /api/posts
*/
exports.list = (ctx) => {
  ctx.body = diaries;
};

/* 새로운 diary 작성
POST /api/posts
{ _id, title, body, date, location }
*/
exports.write = (ctx) => {
  // REST API의 Requiest Body는 ctx.request.body에서 조회 가능
  const { _id, title, body, date, location } = ctx.request.body;
  diaryId += 1;
  const diary = { _id, id: diaryId, title, body, date, location };
  diaries.push(diary);
  ctx.body = diary;
};

/* 특정 다이어리 조회
GET /api/posts/:id
*/
exports.read = (ctx) => {
  const { id } = ctx.params;
  // 주어진 id값으로 diary 찾기
  // 파라미터로 받아 온 값은 문자열 형식
  // 파라미터를 숫자로 변환 또는 비교할 d.id 값을 문자열로 변경
  const diary = diaries.find((d) => d.id.toString() === id);
  // diary가 없으면 오류 반환
  if (!diary) {
    ctx.status = 404;
    ctx.body = {
      message: '다이어리가 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = diary;
};

/* 특정 다이어리 제거
DELETE /api/posts/:id
*/
exports.remove = (ctx) => {
  const { id } = ctx.params;
  // 제거할 diary의 id를 찾기
  const index = diaries.findIndex((d) => d.id.toString() === id);
  // 찾는 diary가 없으면 오류 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '다이어리가 존재하지 않습니다.',
    };
    return;
  }
  // index번째 diary 제거
  diaries.splice(index, 1);
  ctx.status = 204; // No Content
};

/* 특정 다이어리 수정(특정 부분 수정)
PATCH /api/posts/:id
{ title, body, date, location }
*/
exports.update = (ctx) => {
  // 특정 부분만 수정(교체)
  const { id } = ctx.params;
  // 해당 id를 가진 diary를 찾음
  const index = diaries.findIndex((d) => d.id.toString() === id);
  // diary가 없으면 오류 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  diaries[index] = {
    ...diaries[index],
    ...ctx.request.body,
  };
  ctx.body = diaries[index];
};

/* 특정 다이어리 수정(교체)
PUT /api/posts/:id
{ title, body, date, location }
*/
exports.replace = (ctx) => {
  // 전체 다이어리 정보를 입력하여 데이터를 통째로 교체
  const { _id, id } = ctx.params;
  // 해당하는 id를 가진 다이어리를 찾음
  const index = diaries.findIndex((d) => d.id.toString() === id);
  // 찾는 diary가 없으면 오류 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '다이어리가 존재하지 않습니다.',
    };
    return;
  }
  // 전체 diaries를 덮어 씌움
  // _id, id를 제외한 기본 정보를 날리고, 객체를 새로 생성
  diaries[index] = {
    _id,
    id,
    ...ctx.request.body,
  };
  ctx.body = diaries[index];
};
