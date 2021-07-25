import { types } from "../types/types"
import axios from 'axios';

export const startCargarLibros = () => {

    return async (dispatch) => {

        const { status, data } = await axios.get('http://localhost:3000/libro');

        if (status === 200) {
            dispatch(cargarLibros(data.libros))
        } else {
            console.log(`Error: ${data.mensaje} Status: ${status}`);
        }
    }
};

export const cargarLibros = (libros) => ({
    type: types.libroLoad,
    payload: libros,
})

export const startBorrarLibro = (id) => {
    return async (dispatch) => {

        const { status, data } = await axios.delete(`http://localhost:3000/libro/${id}`);

        if (status === 200) {
            dispatch(borrarLibro(id));
        } else {
            console.log(`Error: ${data.mensaje} Status: ${status}`);
        }
    }

}

export const borrarLibro = (id) => ({
    type: types.libroDelete,
    payload: id,
})


export const startDevolverLibro = (id) => {
    return async (dispatch) => {

        const state = {
            id: null
        }
        const { status, data } = await axios.put(`http://localhost:3000/libro/devolver/${id}`, state);

        if (status === 200) {
            dispatch(devolverLibro(id));
        } else {
            console.log(`Error: ${data.mensaje} Status: ${status}`);
        }
    }
}

export const devolverLibro = (id) => ({
    type: types.libroReturn,
    payload: id,
})


export const startPrestarLibro = (id, persona_id) => {
    return async (dispatch) => {

        const body = {
            persona_id
        }

        const { status, data } = await axios.put(`http://localhost:3000/libro/prestar/${id}`, body);

        if (status === 200) {
            dispatch(prestarLibro(id, persona_id));
        } else {
            console.log(`Error: ${data.mensaje} Status: ${status}`);
        }
    }
}

export const prestarLibro = (id, persona_id) => ({
    type: types.libroReturn,
    payload: {
        id,
        persona_id
    },
});

export const startCrearLibro = (nombre, descripcion, categoria, persona) => {

    return async (dispatch) => {

        const libro = {
            nombre,
            descripcion,
            categoria_id: "60bbceb13b6e7535804db9e6",
            persona_id: "60bbe988562038259872791f"
        };

        const { status, data } = await axios.post('http://localhost:3000/libro', libro);

        if (status === 200) {
            dispatch(crearLibro(data.libro))
        } else {
            console.log(`Error: ${data.mensaje} Status: ${status}`);
        }
    }
};


export const crearLibro = (libro) => ({
    type: types.libroNew,
    payload: libro
});

export const startActualizarLibro = (id, descripcion) => {
    return async (dispatch) => {

        const libro = {
            descripcion
        };

        const { status, data } = await axios.put(`http://localhost:3000/libro/${id}`, libro);

        if (status === 200) {
            dispatch(actualizarLibro(id, data.libro))
        } else {
            console.log(`Error: ${data.mensaje} Status: ${status}`);
        }
    }
};

export const actualizarLibro = (id, libro) => ({
    type: types.libroUpdate,
    payload: {
        id,
        libro,
    }
})

