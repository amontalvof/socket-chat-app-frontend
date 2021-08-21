import { types } from '../../types/types';

// const initialState = {
//     uid: '',
//     chatActive: null,
//     users: [],
//     messages: [],
// };

export const chatReducer = (state, action) => {
    switch (action.type) {
        case types.usersLoaded:
            return {
                ...state,
                users: [...action.payload],
            };
        case types.activateChat:
            if (state.chatActive === action.payload) return state;
            return {
                ...state,
                chatActive: action.payload,
                messages: [],
            };
        default:
            return state;
    }
};
