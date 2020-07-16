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
  sublist: [],
  selectedDate: '',
};

export const calendarReducer = (state, action) => {
  switch (action.type) {
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
        selectedDate: action.selectedDate,
      };
    default:
      throw new Error(`${action.type}: ERROR`);
  }
};
