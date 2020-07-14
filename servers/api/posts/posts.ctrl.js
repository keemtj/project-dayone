let diaryId = 15;

const diaries = [
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
    imagePaths: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5TgAiOTKorndQ1qt21VR9IVpItkvJi3-wjQ&usqp=CAU',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: true,
  },
  {
    id: 4,
    title: 'Diary Title 4',
    content: 'This is diary 4',
    date: '2020-6-2',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    id: 5,
    title: 'Diary Title 5',
    content: 'This is diary 5',
    date: '2020-6-6',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
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
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
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
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
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
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
];

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
  // REST API의 Request Body는 ctx.request.body에서 조회 가능
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
