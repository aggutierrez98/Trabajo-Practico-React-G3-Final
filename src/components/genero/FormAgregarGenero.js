import React from 'react'
import { useDispatch } from 'react-redux';
import { startCrearGenero } from '../../actions/generos';
import { cerrarModal } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

// import "../../styles/components/form.css";

const initialState = {
    nombre: "",
};

// export const FormAgregarGenero = () => {

//     const dispatch = useDispatch();

//     const [formValues, handleInputChange, reset] = useForm(initialState);

//     const { nombre } = formValues;

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(startCrearGenero(nombre));
//         reset();
//         dispatch(cerrarModal());
//     };


    return (
        <div>

            <form onSubmit={handleSubmit}>
                
                <label for="nombre" class="colocar_nombre">Agregar un nuevo género<span>*</span></label>

                <div className="formGenero">
                    <tr>
                    <td><input type="text" name="nombre" onChange={handleInputChange} value={nombre} placeholder="¿Cuál es el nuevo género?" autoComplete="off"></input></td>
                    <td><button type="submit"> Ingresar género </button></td>
                    </tr>           
                </div>
                
                
            </form>
            

            <p class="aviso"><span> * </span>Campos obligatorios.</p>

            <hr></hr>

        </div>
    )
}

