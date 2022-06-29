const { authConstants } = require("../actions/constants");

const initState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: ''
};

export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        ...action.payload,
        authenticating: true,
        loading: true
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        token: action.payload.token,
        loading: false,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error
      };
      break;
  }
  return state;
};
