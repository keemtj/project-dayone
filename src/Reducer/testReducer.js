const initialState = {
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
    title: 'tt',
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
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { initialState, testReducer };
