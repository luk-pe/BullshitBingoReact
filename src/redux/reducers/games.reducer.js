import * as Actions from '../actions';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
    games: []
};

const gamesReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.ADD_GAME: {
            return {
                ...state,
                games: [...state.games, action.payload]
            };
        }
        case Actions.SAVE_GAME: {
            return {
                ...state,
                games: state.games.map(game => game.id === action.payload.id ? action.payload : game),
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
    key: 'games',
    storage: storage,
};

export default persistReducer(persistConfig, gamesReducer);