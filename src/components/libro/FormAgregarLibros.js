import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startCrearLibro } from '../../actions/libros';
import { cerrarModal } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

import "../../styles/components/form.css";

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
        dispatch(cerrarModal());
    };

    const generoChange = (event) => {
        setGenero(event.target.value);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>

            <h2>Agregar libro</h2>
            <p>Ingresar datos de un libro</p>

            <div className="form-label">
                <label>Nombre</label>
                <span> *</span>
            </div>
            <input type="text" name="nombre" onChange={handleInputChange} value={nombre} placeholder="Ingresar nombre" autoComplete="off" required></input>

            <label>Descripcion</label>
            <input type="text" name="descripcion" onChange={handleInputChange} value={descripcion} placeholder="Ingresar descripcion" autoComplete="off"></input>

            <div className="form-label">
                <label>Genero</label>
                <span> *</span>
            </div>
            <select value={genero} onChange={generoChange} required>
                <option hidden value=""> Seleccione un genero </option>
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

            <button className="boton-form">Hecho</button>
            <div className="form-label">
                <span>* </span>
                <label>Los campos son obligatorios</label>
            </div>
        </form>
    )
}
