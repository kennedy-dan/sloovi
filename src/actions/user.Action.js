import axios from "../helpers/axios";
import { assignUserConstants } from "./constants";

export const users = (user) => {
    console.log(user);
  
    return async (dispatch) => {
      dispatch({ type: assignUserConstants.GET_USER_REQUEST });
      const res = await axios.get("/team?product=outreach&company_id=company_413ef22b6237417fb1fba7917f0f69e7", {
      
    
    });
  
      if (res.status === 200) {
        
        const {data} = res.data.results
        dispatch({
          type: assignUserConstants.GET_USER_SUCCESS,
          payload: { data },
        });
        
      } else {
        if (res.status === 400) {
          dispatch({
            type: assignUserConstants.GET_USER_FAILURE,
            payload: { error: res.data.error },
          });
        }
      }
    };
  };