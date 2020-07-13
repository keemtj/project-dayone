const initialState = {
  userData: {
    // _id: 1,
    // userId: 'dorodoro',
    // userPw: '123,
  },
  diaries: [
    // {
    //   id: 1,
    //   title: '',
    //   body: '',
    //   date: '',
    //   location: {},
    //   isBookmarked: false,
    //   imagePaths: [],
    // },
  ],
  currentDiary: {
    id: 1,
    title: '',
    body: '',
    date: '',
    location: {},
    isBookmarked: false,
    imagePaths: [],
  },
  error: {
    state: false,
    message: null,
  },
  loading: false,
};

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        diaries: action.diaries,
        loading: false,
      };
    case 'ERROR':
      return {
        ...state,
        error: {
          state: true,
          message: action.message,
        },
        loading: false,
      };
    case 'WRITE_POST':
      return {
        ...state,
        currentDiary: { ...state.currentDiary, body: action.write },
      };
    case 'SUBMIT_POST':
      return {
        ...state,
        diaries: [...state.diaries, state.currentDiary],
        currentDiary: {},
      };
    case 'WRITE_TITLE':
      return {
        ...state,
        currentDiary: { ...state.currentDiary, title: action.write },
      };
    case 'PUSH_IMG':
      return {
        ...state,
        currentDiary: { ...state.currentDiary, imagePaths: action.images },
      };
    case 'GET_USER_DATA':
      return {
        ...state,
        userData: { ...action.data, active: true },
      };
    case 'TOGGLE_BOOKMARK':
      return {
        ...state,
        diaries: state.diaries.map((diary) => {
          return +diary.id === +action.id
            ? { ...diary, isBookmarked: !diary.isBookmarked }
            : diary;
        }),
      };
    case 'LOG_OUT':
      // return initialState;
      return {
        ...state,
        userData: {},
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { initialState, mainReducer };
