import {combineReducers} from "redux";

import gamesReducer from './games.reducer';
import templatesReducer from './templates.reducer';

export default combineReducers({
    gamesReducer,
    templatesReducer
});