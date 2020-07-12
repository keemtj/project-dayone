const loginInitialState = {
  isLoggedIn: false,
  users: [
    { id: 1, userId: 'dorodoro', userPw: '123', active: false },
    { id: 2, userId: 'jay', userPw: '123', active: false },
    { id: 3, userId: 'jimmy', userPw: '123', active: false },
    { id: 4, userId: 'haeuni', userPw: '123', active: false },
    { id: 5, userId: 'f', userPw: 'f', active: false },
  ],
  inputs: {
    id: '',
    password: '',
  },
  message: '',
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'USER_CHECK':
      return {
        ...state,
        users: state.users.map((user) => {
          // eslint-disable-next-line no-unused-expressions
          return user.userId === action.userId &&
            user.userPw === action.password
            ? { ...user, active: !user.active }
            : user;
        }),
        isLoggedIn: !state.isLoggedIn,
      };
    case 'RESET_INPUT':
      return {
        ...state,
        inputs: { id: '', password: '' },
      };
    case 'ERROR_MESSAGE':
      return {
        ...state,
        message: '가입하지 않은 아이디이거나, 잘못된 비밀번호 입니다.',
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        users: state.users.map((user) => ({ ...user, active: false })),
        message: '',
      };
    default:
      throw new Error('Unhandled action');
  }
};

export { loginInitialState, loginReducer };
