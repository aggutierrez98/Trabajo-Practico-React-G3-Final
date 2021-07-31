import React from 'react'
import { useDispatch } from 'react-redux';
import { startCrearGenero } from '../../actions/generos';
import { cerrarModal } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import "../../pages/css/generoPageStyle.css";
// import "../../styles/components/form.css";

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
        <div>

            <form onSubmit={handleSubmit}>

                <label htmlFor="nombre" className="colocar_nombre">Agregar un nuevo género<span>*</span></label>

                <div className="formGenero">
                    <table>
                        <thead>
                            <tr>
                                <td><input type="text" name="nombre" onChange={handleInputChange} value={nombre} placeholder="¿Cuál es el nuevo género?" autoComplete="off"></input></td>
                                <td><button type="submit"> <ion-icon name="add-circle"></ion-icon> </button></td>
                            </tr>
                        </thead>
                    </table>
                </div>


            </form>


            <p className="aviso"><span> * </span>Campos obligatorios.</p>

            <hr></hr>

        </div>
    )
}

