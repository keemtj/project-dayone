const initialState = {
  diaries: [
    // {
    //   id: 1,
    //   title: '',
    //   body: '',
    //   date: '',
    //   location: {},
    //   isBookmarked: false,
    //   images: [],
    // },
  ],
  currentDiary: {
    id: 1,
    title: '',
    body: '',
    date: '',
    location: {},
    isBookmarked: false,
    images: [],
  },
  error: {
    state: false,
    message: null,
  },
  loading: false,
};

const testReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        diaries: action.postsData,
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
        currentDiary: { ...state.currentDiary, images: action.images },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { initialState, testReducer };
