import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export const postReducer=(state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            // console.log("object7")
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}