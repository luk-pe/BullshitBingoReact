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
                templates: [...state.templates, action.payload]
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