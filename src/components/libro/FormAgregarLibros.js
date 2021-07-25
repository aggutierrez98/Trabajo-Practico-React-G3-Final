import React from 'react'
import { useDispatch } from 'react-redux';
import { startCrearLibro } from '../../actions/libros';
import { useForm } from '../../hooks/useForm';

const initialState = {
    nombre: "",
    descripcion: "",
    categoria: "",
    persona: ""

};

export const FormAgregarLibros = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm(initialState);

    const { nombre, descripcion, categoria, persona } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startCrearLibro(nombre, descripcion, categoria, persona))
        reset();
    };

    return (
        <div>
            <h2>Agregar libro</h2>

            <form onSubmit={handleSubmit}>

                <input type="text" name="nombre" onChange={handleInputChange} value={nombre} placeholder="Ingresar nombre"></input>

                <input type="text" name="descripcion" onChange={handleInputChange} value={descripcion} placeholder="Ingresar descripcion"></input>

                <input type="text" name="categoria" onChange={handleInputChange} value={categoria} placeholder="Ingresar categoria"></input>

                <input type="text" name="persona" onChange={handleInputChange} value={persona} placeholder="Ingresar persona"></input>
                <button type="submit"> Hecho </button>
            </form>

        </div>
    )
}
