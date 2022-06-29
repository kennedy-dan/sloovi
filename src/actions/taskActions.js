import axios from "../helpers/axios";
import { taskConstants } from "./constants";

export const postTasks = (task) => {
    return async (dispatch) => {
        dispatch({ type: taskConstants.ADD_TASK_REQUEST });
        try{
          const res = await axios.post("/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=company_413ef22b6237417fb1fba7917f0f69e7", task);
          if (res.status === 200) {
            dispatch({
              type: taskConstants.ADD_TASK_SUCCESS,
              payload: { task: res.data },
            });
          } else {
            dispatch({
              type: taskConstants.ADD_TASK_FAILURE,
              payload: { error: res.data.error },
            });
          }
        }catch(error){
          console.log(error.response)
        }
  };
};
