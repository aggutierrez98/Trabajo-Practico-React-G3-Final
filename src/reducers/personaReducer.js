import { types } from "../types/types";

const initialState = {
    personas: [],
    personaActive: {
        _id: null,
        nombre: "",
        apellido: "",
        alias: "",
        email: "",
    }
};

export const personaReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.personaLoad:
            return {
                ...state,
                personas: action.payload,
            };

        case types.personaDelete:
            return {
                ...state,
                personas: state.personas.filter(persona => persona._id !== action.payload),
            };

        case types.personaNew:
            return {
                ...state,
                personas: [action.payload, ...state.personas]
            };

        case types.personaUpdate:
            return {
                ...state,
                personas: state.personas.map(persona => {
                    if (persona._id === action.payload.id) {
                        persona = action.payload.persona;
                    }

                    return persona;
                }),
            };

        default:
            return state;
    };
};