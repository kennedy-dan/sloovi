const { assignUserConstants } = require("../actions/constants");

const initState = {
  user: [],
  loading: false

};

export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case assignUserConstants.GET_USER_REQUEST:
      state = {
        ...state,
        ...action.payload,
        loading: true
      };
      break;
    case assignUserConstants.GET_USER_SUCCESS:
      state = {
        ...state,
        user: action.payload,
        loading: false,
        
      };
      break;
    case assignUserConstants.GET_USER_FAILURE:
      state = {
        ...state,
        error: action.payload.error
      };
      break;
  }
  return state;
};
