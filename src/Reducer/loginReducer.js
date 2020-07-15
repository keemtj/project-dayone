const loginInitialState = {
  isLoggedIn: false,
  users: [
    {
      id: 1,
      userId: 'dorodoro',
      userPw: '123',
      pic:
        'https://cdn.dribbble.com/users/1514929/screenshots/4817580/cute-cat-illustration.jpg',
      msg: '',
      active: false,
    },
    {
      id: 2,
      userId: 'jay',
      userPw: '123',
      pic:
        'https://i.pinimg.com/564x/d7/2d/eb/d72deb6ea7c83283ebaf2c7e36e70714.jpg',
      msg: 'ㅇㅅㅇ',
      active: false,
    },
    {
      id: 3,
      userId: 'jimmy',
      userPw: '123',
      pic:
        'https://i.pinimg.com/originals/88/9c/40/889c409fc04bf9a00a376beaa1d88697.jpg',
      msg: 'what does the fox say?????',
      active: false,
    },
    {
      id: 4,
      userId: 'haeuni',
      userPw: '123',
      pic:
        'https://images.creativemarket.com/0.1.0/ps/2737010/580/386/m1/fpnw/wm0/preview-.jpg?1495585272&s=9d2d696ca3800266dafe5e90ff3592f0',
      msg: '멍멍',
      active: false,
    },
    {
      id: 5,
      userId: 'f',
      userPw: 'f',
      pic: '',
      msg: '',
      active: false,
    },
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
