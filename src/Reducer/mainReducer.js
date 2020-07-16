const getToday = () => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

const initialState = {
  userData: {
    // id: 1,
    // userId: '',
    // userPw: '',
    // active: true,
  },
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
    id: 0,
    title: '',
    content: '',
    date: getToday(),
    location: {
      lat: 0,
      lng: 0,
      name: '',
    },
    isBookmarked: false,
    imagePaths: [],
  },
  viewerDiary: {},
  editState: false,
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
        diaries: action.diaries.sort((a, b) => b.id - a.id),
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
    case 'WRITE_DIARY':
      return {
        ...state,
        currentDiary: { ...state.currentDiary, content: action.write },
      };
    case 'SUBMIT_DIARY':
      return {
        ...state,
        diaries: [...state.diaries, state.currentDiary],
        // currentDiary: initialState.currentDiary,
      };
    case 'EDIT_DIARY':
      return {
        ...state,
        diaries: state.diaries.map((diary) =>
          diary.id === state.currentDiary.id ? state.currentDiary : diary,
        ),
        editState: false,
      };
    case 'DELETE_DIARY':
      return {
        ...state,
        diaries: state.diaries.filter((diary) => diary.id !== action.id),
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
    case 'CLEAR_CURRENTDIARY':
      return {
        ...state,
        currentDiary: initialState.currentDiary,
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
    case 'CHANGE_DATE':
      return {
        ...state,
        currentDiary: {
          ...state.currentDiary,
          date: action.date,
        },
      };
    case 'SET_EDIT_STATE':
      return {
        ...state,
        currentDiary: state.viewerDiary,
        editState: true,
      };
    case 'EDIT_PROFILE':
      return {
        ...state,
        userData: { ...state.userData, msg: action.msg, pic: action.pic },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { initialState, mainReducer };
