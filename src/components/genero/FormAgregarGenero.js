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

//     return (
//         <form className="form" onSubmit={handleSubmit}>
//             <h2>Agregar genero</h2>
//             <p>Ingresar datos del genero</p>

//             <div className="form-label">
//                 <label>Nombre</label>
//                 <span> *</span>
//             </div>
//             <input type="text" name="nombre" onChange={handleInputChange} value={nombre} placeholder="Ingresar nombre" autoComplete="off" required></input>

//             <button className="boton-form">Hecho</button>
//             <div className="form-label">
//                 <span>* </span>
//                 <label>Los campos son obligatorios</label>
//             </div>
//         </form>
//     )
// }