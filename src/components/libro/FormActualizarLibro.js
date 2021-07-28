import React from 'react'
import { useDispatch } from 'react-redux';
import { startActualizarLibro } from '../../actions/libros';
import { useForm } from '../../hooks/useForm';

export const FormActualizarLibro = ({ id }) => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        descripcion: "",
    });

    const { descripcion: desc } = formValues;

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(startActualizarLibro(id, desc))
        reset();
    }

    return (
        <div>
            <h3>Actualizar</h3>

            <form onSubmit={onSubmit}>
                <input type="text" name="descripcion" onChange={handleInputChange} value={desc} placeholder="Ingresar descripcion" autoComplete="off"></input>
                <button type="submit"> Hecho </button>
            </form>
        </div>
    )
}
