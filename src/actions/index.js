import {
    SEARCH_CHANGE,
    MOVIES_FAILED,
    MOVIES_FETCHED
} from "../types";

export const searchChanged = (text) => {
    console.log('action', SEARCH_CHANGE, text)
    return {
        type: SEARCH_CHANGE,
        payload: text
    }
};

export const getMovies = (text) => async (dispatch) => {
    function onSuccess(success) {
        dispatch({
            type: MOVIES_FETCHED,
            payload: success
        })
        return success
    }

    function onError(error) {
        dispatch({
            type: MOVIES_FAILED,
            payload: error
        })
        return error
    }

    try {
        const URL = `http://api.tvmaze.com/search/shows?q=${text}`
        const res = await fetch(URL, {
            method: 'GET'
        })
        const success = await res.json()
        console.log(success)
        return onSuccess(success)
    } catch (e) {
        onError(e)
    }
}

