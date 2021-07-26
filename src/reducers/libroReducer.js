import { types } from "../types/types";

const initialState = {
    libros: [],
}

export const libroReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.libroLoad:
            return {
                ...state,
                libros: action.payload,
            };

        case types.libroDelete:
            return {
                ...state,
                libros: state.libros.filter(libro => libro._id !== action.payload),
            };

        case types.libroReturn:
            return {
                ...state,
                libros: state.libros.map(libro => {
                    if (libro._id === action.payload) {
                        libro.persona_id = null;
                    }

                    return libro;
                }),
            };

        case types.libroLend:
            return {
                ...state,
                libros: state.libros.map(libro => {
                    if (libro._id === action.payload.id) {
                        libro.persona_id = action.payload.persona_id;
                    }

                    return libro;
                }),
            };

        case types.libroNew:
            return {
                ...state,
                libros: [action.payload, ...state.libros]
            };

        case types.libroUpdate:
            return {
                ...state,
                libros: state.libros.map(libro => {
                    if (libro._id === action.payload.id) {
                        libro = action.payload.libro;
                    }

                    return libro;
                }),
            };

        default:
            return state;
    };
};