import {combineReducers} from "redux";

import gamesReducer from './games.reducer';
import templatesReducer from './templates.reducer';
import userReducer from './user.reducer';

export default combineReducers({
    gamesReducer: gamesReducer,
    templatesReducer: templatesReducer,
    userReducer: userReducer
});