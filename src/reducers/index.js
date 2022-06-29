import { combineReducers } from 'redux'
import taskReducer from './taskReduer'
import authReducer from './auth.reducer';
import userReducer from './user.Reducer';






const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    task: taskReducer,

 
});

export default reducer