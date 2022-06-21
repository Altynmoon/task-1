// import {} from "../actions/fetchRicky";
import { SET_CHARACTERS } from "../actions/fetchRicky";
import { SET_CHARACTERS_PAGE_INFO } from "../actions/fetchRicky";

const initState = {
    characters: [],
    episodes: [],
    pageInfo: {
        page: 1,
        total_pages: 0,
    },
}
export function ricky(state = initState, action) {
    const newState = {...state}

    switch (action.type) {
        case SET_CHARACTERS:
            newState.characters = action.payload
            break;
        case SET_CHARACTERS_PAGE_INFO:
            newState.pageInfo = action.payload
            break;
        default:
            return state;
    }
    return newState
}