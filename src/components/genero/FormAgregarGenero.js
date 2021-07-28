import React from 'react'
import { useDispatch } from 'react-redux';
import { startCrearGenero } from '../../actions/generos';
import { cerrarModal } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

const initialState = {
    nombre: "",
};

export const FormAgregarGenero = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm(initialState);

    const { nombre } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startCrearGenero(nombre));
        reset();
        dispatch(cerrarModal());
    };

    return (
        <div>
            <h2>Agregar genero</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" onChange={handleInputChange} value={nombre} placeholder="Ingresar nombre" autoComplete="off"></input>
                <button type="submit"> Hecho </button>
            </form>

        </div>
    )
}