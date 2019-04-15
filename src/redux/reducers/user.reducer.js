import * as Actions from '../actions';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {SET_USER} from "../actions";

const initialState = {
    user: [],
    subscribes_to: []
};

const userReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_USER: {
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
        case Actions.GET_SUBSCRIBES_TO: {
            return {
                ...state,
                subscribes_to: [...action.payload]
            }
        }
        case Actions.ADD_SUBSCRIBES_TO: {
            return {
                ...state,
                subscribes_to: state.subscribes_to.find(u => u.uid === action.payload.uid) === null ? [...state.subscribes_to, action.payload] : state.subscribes_to
                //subscribes_to: [...state.subscribes_to, action.payload]
            }
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