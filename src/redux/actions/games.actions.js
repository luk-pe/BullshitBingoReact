export const ADD_GAME = 'ADD_GAME';
export const SAVE_GAME = 'SAVE_GAME';

export function addGame(game) {
    return {
        type: ADD_GAME,
        payload: game
    }
}

export function saveGame(game) {
    return {
        type: SAVE_GAME,
        payload: game
    }
}