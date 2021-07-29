import React from 'react'
import { useDispatch } from 'react-redux';
import { startBorrarGenero } from '../../actions/generos';

export const GeneroCard = ({ nombre, _id: id }) => {

    const dispatch = useDispatch();

    const onBorrar = () => {
        dispatch(startBorrarGenero(id));
    };

    return (
        <div className="cardGenero">
            <tr>
            <td><label for="nombre" >{nombre}</label></td>
             <td><button onClick={onBorrar}>Borrar {nombre} <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button></td>
             </tr>           
        </div>
    )
}
