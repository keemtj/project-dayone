export const loginInitState = {
  user: {
    _id: null,
    userId: null,
    userPw: null,
  },
  isLoggedIn: false,
  layout: 'list', // options: list, card, media
  diaries: [],
};

export const loginReducer = (state, action) => {};
