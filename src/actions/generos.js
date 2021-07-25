import { types } from "../types/types"
import axios from 'axios';

export const startCargarGeneros = () => {

    return async (dispatch) => {

        const { status, data } = await axios.get('http://localhost:3000/categoria');

        if (status === 200) {
            dispatch(cargarGeneros(data.categorias));
        } else {
            console.log(`Error: ${data.mensaje} Status: ${status}`);
        }
    }
};

const cargarGeneros = (generos) => ({
    type: types.generoLoad,
    payload: generos,
});

export const startBorrarGenero = (id) => {

    return async (dispatch) => {

        const { status, data } = await axios.delete(`http://localhost:3000/categoria/${id}`);

        if (status === 200) {
            dispatch(borrarGenero(id));
        } else {
            console.log(`Error: ${data.mensaje} Status: ${status}`);
        }
    }
};

const borrarGenero = (id) => ({
    type: types.generoDelete,
    payload: id,
});

export const startCrearGenero = (nombre) => {

    return async (dispatch) => {

        const genero = {
            nombre,
        };

        const { status, data } = await axios.post("http://localhost:3000/categoria", genero);

        if (status === 200) {
            dispatch(crearGenero(data.categoria));
        } else {
            console.log(`Error: ${data.mensaje} Status: ${status}`);
        }
    }
};

const crearGenero = (genero) => ({
    type: types.generoNew,
    payload: genero,
});