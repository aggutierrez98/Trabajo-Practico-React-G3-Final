import React from 'react'
import { useDispatch } from 'react-redux';
import { startBorrarGenero } from '../../actions/generos';
import "../../pages/css/generoPageStyle.css";

export const GeneroCard = ({ nombre, _id: id }) => {

    const dispatch = useDispatch();

    const onBorrar = () => {
        dispatch(startBorrarGenero(id));
    };

    return (
        <div className="cardGenero">
            <table>
                <thead>
                    <tr>
                        <td>
                            <label htmlFor="nombre" >{nombre}</label>
                        </td>
                        <td>
                            <button onClick={onBorrar}>
                                <ion-icon name="trash"></ion-icon>
                            </button>
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
