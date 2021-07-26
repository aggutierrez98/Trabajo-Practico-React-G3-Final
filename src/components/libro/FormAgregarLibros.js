import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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

    const { nombre, descripcion } = formValues;

    const { generos } = useSelector(state => state.genero);

    const [genero, setGenero] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startCrearLibro(nombre, descripcion, genero))
        reset();
    };

    const generoChange = (event) => {
        setGenero(event.target.value);
    };

    return (
        <div>
            <h2>Agregar libro</h2>

            <form onSubmit={handleSubmit}>

                <input type="text" name="nombre" onChange={handleInputChange} value={nombre} placeholder="Ingresar nombre" autoComplete="off"></input>

                <input type="text" name="descripcion" onChange={handleInputChange} value={descripcion} placeholder="Ingresar descripcion" autoComplete="off"></input>

                <select value={genero} onChange={generoChange}>
                    <option hidden> Seleccione un genero </option>
                    {
                        generos.map(genero => (
                            <option
                                value={genero._id}
                                key={genero._id}
                            >
                                {genero.nombre}
                            </option>
                        ))
                    }
                </select>

                <button type="submit"> Hecho </button>
            </form>

        </div>
    )
}
