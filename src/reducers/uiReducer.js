import { types } from "../types/types";

const initialState = {
    modalOpen: false,
    modalOpenBorrowed: false,
    id: "",
    filtered: false,
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.modalOpen:

            if (action.payload) {
                return {
                    modalOpen: true,
                    id: action.payload.id
                }
            }

            return {
                modalOpen: true,
            };

        case types.modalOpenBorrowed:

            if (action.payload) {
                return {
                    modalOpenBorrowed: true,
                    id: action.payload.id
                }
            }

            return {
                modalOpenBorrowed: true,
            };

        case types.modalClose:
            return {
                modalOpen: false,
                modalOpenBorrowed: false,
            };

        case types.searchFinish:
            return {
                filtered: true,
            };

        default:
            return state;
    };
};