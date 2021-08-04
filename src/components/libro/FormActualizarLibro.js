import React from 'react'
import { useDispatch } from 'react-redux';
import { startActualizarLibro } from '../../actions/libros';
import { cerrarModal } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import "../../styles/components/form.css"

export const FormActualizarLibro = ({ id }) => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        descripcion: "",
        nombre: "",
    });

    const { descripcion, nombre } = formValues;

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(startActualizarLibro(id, nombre, descripcion))
        reset();
        dispatch(cerrarModal());
    }

    return (
        <div>
            <form id="form" onSubmit={onSubmit}>
                <h2>Actualizar libro</h2>
                <p>Ingresar datos a actualizar</p>
                <div id="form-label">
                    <label>Nombre</label>
                    <span> *</span>
                </div>
                <input type="text" name="nombre" onChange={handleInputChange} value={nombre} placeholder="Ingresar nombre" autoComplete="off" required></input>
                <label id="form-label">Descripcion</label>
                <input type="text" name="descripcion" onChange={handleInputChange} value={descripcion} placeholder="Ingresar descripcion" autoComplete="off"></input>
                <button id="boton-form">Hecho</button>
                <div id="form-label">
                    <span>* </span>
                    <label>Los campos son obligatorios</label>
                </div>
            </form>
        </div>
    )
}
