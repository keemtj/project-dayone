export const calendarInitState = {
  loading: false,
  error: null,
  now: {
    year: '',
    month: '',
    date: '',
  },
  calendar: {
    startDay: '',
    year: '',
    month: '',
    datesArray: [],
  },
  modal: {
    display: false,
    inputs: { year: '', month: '' },
    warning: '',
  },
  sublist: [
    // {
    //   _id: 1,
    //   id: 1,
    //   title: 'asdjfkl',
    //   content: 'blablablalaalbjaklbjla',
    //   date: 'Sat Jul 14 2020 00:00:00 GMT+0900 (대한민국 표준시)',
    //   location: '성수',
    // },
    // {
    //   _id: 1,
    //   id: 2,
    //   title: '로롱놀오',
    //   content: 'ㅈ셔ㅑ댖겨ㅑㄷ져갸ㅐ',
    //   date: '2020.07.04',
    //   location: '성수',
    // },
    // {
    //   _id: 1,
    //   id: 3,
    //   title: '캬캬캬캬캬ㅑㅋ',
    //   content: '가나다라마바사',
    //   date: '2020.07.04',
    //   location: '성수',
    // },
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
    case 'GET_NOW':
      return {
        ...state,
        now: action.now,
        calendar: {
          ...state.calendar,
          year: action.year,
          month: action.month,
        },
      };
    case 'GET_DATESARRAY':
      return {
        ...state,
        calendar: {
          ...state.calendar,
          datesArray: action.datesArray,
        },
      };
    case 'GET_FIRSTDAY':
      return {
        ...state,
        calendar: {
          ...state.calendar,
          startDay: action.firstDay,
        },
      };
    case 'GET_NEW_CALENDAR':
      return {
        ...state,
        calendar: {
          ...state.calendar,
          year: action.year,
          month: action.month,
        },
      };
    case 'OPEN_MODAL':
      return {
        ...state,
        modal: {
          display: true,
          inputs: {
            year: state.now.year,
            month: state.now.month,
          },
          warning: '',
        },
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        modal: {
          ...state.modal,
          display: false,
        },
      };
    case 'CHANGE_MONTH_INPUT':
      return {
        ...state,
        modal: {
          ...state.modal,
          inputs: { ...state.modal.inputs, month: action.value },
        },
      };
    case 'CHANGE_YEAR_INPUT':
      return {
        ...state,
        modal: {
          ...state.modal,
          inputs: { ...state.modal.inputs, year: action.value },
        },
      };
    case 'SHOW_WARNING':
      return {
        ...state,
        modal: {
          ...state.modal,
          warning: action.msg,
        },
      };
    case 'REMOVE_WARNING':
      return {
        ...state,
        modal: {
          ...state.modal,
          warning: '',
        },
      };
    case 'GET_SUBLIST':
      return {
        ...state,
        sublist: action.sublist,
      };
    default:
      throw new Error(`${action.type}: ERROR`);
  }
};
