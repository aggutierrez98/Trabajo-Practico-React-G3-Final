import { types } from "../types/types"
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export const startCargarPersonas = () => {

    return async (dispatch) => {

        try {
            const { data } = await axios.get(`${baseUrl}/persona`);
            dispatch(cargarPersonas(data.personas))

        } catch (error) {
            console.log(error);
        }
    };
}

const cargarPersonas = (personas) => ({
    type: types.personaLoad,
    payload: personas,
})

export const startBorrarPersona = (id) => {
    return async (dispatch) => {

        try {
            await axios.delete(`${baseUrl}/persona/${id}`);
            dispatch(borrarPersona(id));

        } catch (error) {
            console.log(error)
        }
    }
}

const borrarPersona = (id) => ({
    type: types.personaDelete,
    payload: id,
})

export const startCrearpersona = (nombre, apellido, alias, email,) => {

    return async (dispatch) => {

        const persona = {
            nombre,
            apellido,
            alias,
            email,
        };

        try {
            const { data } = await axios.post(`${baseUrl}/persona`, persona);
            dispatch(crearPersona(data.persona))

        } catch (error) {
            console.log(error);
        }
    }
};


const crearPersona = (persona) => ({
    type: types.personaNew,
    payload: persona
});


export const startActualizarpersona = (id, nombre, apellido, alias) => {
    return async (dispatch) => {

        const persona = {
            nombre,
            apellido,
            alias
        };

        try {
            const { data } = await axios.put(`${baseUrl}/persona/${id}`, persona);
            dispatch(actualizarPersona(id, data.persona))

        } catch (error) {
            console.log(error);
        }
    }
};

const actualizarPersona = (id, persona) => ({
    type: types.personaUpdate,
    payload: {
        id,
        persona,
    }
})
