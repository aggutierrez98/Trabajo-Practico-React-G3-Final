import { types } from "../types/types";

const initialState = {
    generos: [],
    generoActive: {
        _id: null,
        nombre: "",
    }

}

export const generoReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.generoLoad:
            return {
                ...state,
                generos: action.payload,
            };

        case types.generoDelete:
            return {
                ...state,
                generos: state.generos.filter(genero => genero._id !== action.payload),
            };

        case types.generoNew:
            return {
                ...state,
                generos: [action.payload, ...state.generos]
            };

        default:
            return state;
    }
};