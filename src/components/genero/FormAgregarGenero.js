import React from 'react'
import { useDispatch } from 'react-redux';
import { startCrearGenero } from '../../actions/generos';
import { cerrarModal } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import "../../pages/css/generoPageStyle.css";

const initialState = {
    nombre: "",
};

export const FormAgregarGenero = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm(initialState);

    const { nombre } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Abriendo modal");
        dispatch(startCrearGenero(nombre));
        reset();
        dispatch(cerrarModal());
    };


    return (
        <div className="formGenero">

            <form onSubmit={handleSubmit}>

                <label htmlFor="nombre" >Agregar un nuevo género<span>*</span></label>
                <table>
                    <thead>
                        <tr>
                            <td><input type="text" name="nombre" onChange={handleInputChange} value={nombre} placeholder="Ingresar un nuevo genero" autoComplete="off" required></input></td>
                            <td><button type="submit"> <ion-icon name="add-circle"></ion-icon> </button></td>
                        </tr>
                    </thead>
                </table>
                <p className="aviso"><span> * </span>Campos obligatorios.</p>

            </form>

        </div>
    )
}

