import React from 'react'
import { useDispatch } from 'react-redux';
import { startBorrarGenero } from '../../actions/generos';

export const GeneroCard = ({ nombre, _id: id }) => {

    const dispatch = useDispatch();

    const onBorrar = () => {
        dispatch(startBorrarGenero(id));
    };

    return (
        <div>
            <h2>{nombre}</h2>

            <button
                onClick={onBorrar}
            >
                Borrar
            </button>


            <br></br>

        </div>
    )
}
