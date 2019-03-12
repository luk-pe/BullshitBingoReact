import * as Actions from '../actions';

const initialState = {
    remoteTemplates: [],
    templates: []
};

const templatesReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ALL_TEMPLATES: {
            return {
                ...state,
                templates: [...action.payload]
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

export default templatesReducer;