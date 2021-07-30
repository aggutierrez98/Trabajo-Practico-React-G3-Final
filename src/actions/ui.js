import { types } from "../types/types";

export const abrirModal = (id) => ({
    type: types.modalOpen,
    payload: {
        id
    }
});

export const cerrarModal = () => ({
    type: types.modalClose
});

export const terminarBusqueda = () => ({
    type: types.searchFinish
})