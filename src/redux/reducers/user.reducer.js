import * as Actions from '../actions';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
    user: []
};

const userReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.LOGIN_USER: {
            return {
                ...state,
                user: action.payload
            };
        }
        case Actions.LOGOUT_USER: {
            return {
                ...state,
                user: null,
            };
        }
        default: {
            return {
                ...state
            }
        }
    }
};

const persistConfig = {
    key: 'user',
    storage: storage,
};

export default persistReducer(persistConfig, userReducer);