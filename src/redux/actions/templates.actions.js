export const GET_ALL_TEMPLATES = 'GET_ALL_TEMPLATES';
export const GET_ALL_REMOTE_TEMPLATES = 'GET_ALL_REMOTE_TEMPLATES';

export function getAllTemplates() {
    return {
        type: GET_ALL_TEMPLATES,
        payload: []
    }
}

export function getAllRemoteTemplates() {
    return {
        type: GET_ALL_REMOTE_TEMPLATES,
        payload: []
    }
}