import {
    SEARCH_CHANGE,
    MOVIES_FAILED,
    MOVIES_FETCHED
} from "../types";

const INITIAL_STATE = {
    movie: '',
    data: []
}

export default (state = INITIAL_STATE, action) => {
    console.log('reducer', action, state)
    switch (action.type) {
        case SEARCH_CHANGE:
            return {
                ...state,
                movie: action.payload
            }
        case MOVIES_FETCHED:
            return {
                ...state,
                data: action.payload
            }
        case MOVIES_FAILED:
            return {
                ...state
            }
        default:
            return state
    }
}