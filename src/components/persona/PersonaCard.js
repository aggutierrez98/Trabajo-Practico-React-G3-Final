import React from 'react'
import { useDispatch } from 'react-redux';
import { startActualizarpersona, startBorrarPersona } from '../../actions/personas';
import { useForm } from '../../hooks/useForm';
import { LibrosPrestados } from './LibrosPrestados';

export const PersonaCard = ({ nombre, apellido, alias, email, _id: id }) => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        name: "",
        surname: "",
        userTag: "",
    });

    const { name, surname, userTag } = formValues;

    const onBorrar = () => {
        dispatch(startBorrarPersona(id))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(startActualizarpersona(id, name, surname, userTag));
        reset();
    }

    return (
        <div>
            <h2>Nombre :</h2>
            <p>{nombre}</p>

            <h2>Apellido: </h2>
            <p>{apellido}</p>

            <h2>Alias :</h2>
            <p>{alias}</p>

            <h2>Email: </h2>
            <p>{email}</p>

            <button
                onClick={onBorrar}
            >
                Borrar
            </button>

            <h3>Actualizar</h3>

            <form onSubmit={onSubmit}>
                <input type="text" name="name" onChange={handleInputChange} value={name} placeholder="Ingresar nombre"></input>
                <input type="text" name="surname" onChange={handleInputChange} value={surname} placeholder="Ingresar apellido"></input>
                <input type="text" name="userTag" onChange={handleInputChange} value={userTag} placeholder="Ingresar alias"></input>
                <button type="submit"> Hecho </button>
            </form>

            <LibrosPrestados id={id} />

            <br></br>
        </div>
    )
}
