export const calendarInitState = {
  loading: false,
  error: null,
  diaries: [
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
  ],
};

export const calendarReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        error: null,
        diaries: state.diaries,
      };
    case 'ERROR':
      return {
        loading: false,
        error: action.error,
        diaries: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        error: null,
        diaries: action.diaries,
      };
    default:
      throw new Error(`${action.type}: ERROR`);
  }
};
