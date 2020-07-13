const getToday = () => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

const initialState = {
  userData: {},
  diaries: [
    // {
    //   id: 1,
    //   title: '',
    //   content: '',
    //   date: '',
    //   location: {},
    //   isBookmarked: false,
    //   imagePaths: [],
    // },
  ],
  currentDiary: {
    id: 1,
    title: '',
    content: '',
    date: getToday(),
    location: {},
    isBookmarked: false,
    imagePaths: [],
  },
  viewerDiary: {},
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
        currentDiary: { ...state.currentDiary, content: action.write },
      };
    case 'SUBMIT_POST':
      return {
        ...state,
        diaries: [...state.diaries, state.currentDiary],
        currentDiary: initialState.currentDiary,
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
    case 'PUSH_DIARY_ID':
      return {
        ...state,
        currentDiary: { ...state.currentDiary, id: state.diaries.length + 1 },
      };
    case 'GET_DIARY_BY_ID':
      return {
        ...state,
        viewerDiary: action.diary,
      };
    case 'CLEAR_VIEWERDIARY':
      return {
        ...state,
        viewerDiary: {},
      };
    case 'GET_USER_DATA':
      return {
        ...state,
        userData: { ...action.data, active: true },
      };
    case 'DELETE_DIARY':
      return {
        ...state,
        diaries: state.diaries.filter((diary) => diary.id !== action.id),
      };
    case 'TOGGLE_BOOKMARK':
      // Work in progress
      // action.id = diary.id
      // action.isBookmarked = e.target.checked = boolean
      console.log('[mainReducer] action.id =', action.id);
      console.log('[mainReducer] action.isBookmarked =', action.isBookmarked);
      return {
        ...state,
        currentDiary: {
          ...state.currentDiary,
          id: action.id,
          isBookmarked: action.isBookmarked,
        },
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
