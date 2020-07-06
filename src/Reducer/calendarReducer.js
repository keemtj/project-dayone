export const calendarInitState = {
  loading: false,
  error: null,
  diaries: [],
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
