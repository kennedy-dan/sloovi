import axios from "../helpers/axios";
import { authConstants } from "./constants";

export const login = (user) => {
    console.log(user);
  
    return async (dispatch) => {
      dispatch({ type: authConstants.LOGIN_REQUEST });
      const res = await axios.post("https://stage.api.sloovi.com/login", {
        ...user,
      });
  
      if (res.status === 200) {
        console.log()
        const { token } = res.data.results;
        console.log(token)
        localStorage.setItem("token", token);
        
  
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: { token },
        });
        console.log(token);
      } else {
        if (res.status === 400) {
          dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: { error: res.data.error },
          });
        }
      }
    };
  };