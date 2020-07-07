export const calendarInitState = {
  loading: false,
  error: null,
  date: '',
  diaries: [
    {
      _id: 1,
      id: 1,
      title: 'asdjfkl',
      content: 'blablablalaalbjaklbjla',
      date: 'Sat Jul 14 2020 00:00:00 GMT+0900 (대한민국 표준시)',
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
  ],
};

export const calendarReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        error: null,
        date: state.date,
        diaries: state.diaries,
      };
    case 'ERROR':
      return {
        loading: false,
        error: action.error,
        date: '',
        diaries: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        error: null,
        date: action.date,
        diaries: action.diaries,
      };
    default:
      throw new Error(`${action.type}: ERROR`);
  }
};
