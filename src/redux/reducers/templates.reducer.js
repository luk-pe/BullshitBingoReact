import * as Actions from '../actions';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
    remoteTemplates: [],
    templates: []
};

const templatesReducer = function (state = initialState, action) {
    switch (action.type) {

        case Actions.ADD_NEW_TEMPLATE: {
            return {
                ...state,
                templates: typeof state.templates === "undefined" ? [action.payload] : [...state.templates, action.payload]
            };
        }
        case Actions.EDIT_TEMPLATE: {
            return {
                ...state,
                templates: state.templates.map(t => t.id === action.payload.id ? action.payload : t)
            };
        }
        case Actions.UPLOAD_TEMPLATE: {
            return {
                ...state,
                templates: state.templates.map(t => t.id === action.payload.id ? action.payload : t)
            };
        }
        case Actions.GET_ALL_REMOTE_TEMPLATES: {
            return {
                ...state,
                remoteTemplates: [...action.payload]
            };
        }
        case Actions.LOGOUT_USER: {
            return {
                state: initialState
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
    key: 'templates',
    storage: storage,
};

export default persistReducer(persistConfig, templatesReducer);