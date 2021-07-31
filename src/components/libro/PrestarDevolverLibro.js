import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startDevolverLibro, startPrestarLibro } from '../../actions/libros';

export const PrestarDevolverLibro = ({ uid }) => {

    const { personas } = useSelector(state => state.persona);

    const dispatch = useDispatch();

    const [persona, setPersona] = useState("");

    const onPrestamo = () => {
        dispatch(startPrestarLibro(uid, persona));
    };

    const personaChange = (event) => {
        setPersona(event.target.value);
    };

    const onDevolver = () => {
        dispatch(startDevolverLibro(uid));
    };

    return (
        <>
        <td className="prestarLibro">

            <select value={persona} onChange={personaChange}>
                <option hidden> Prestar a </option>
                {
                    personas.map(persona => (
                        <option
                        value={persona._id}
                        key={persona._id}
                        onSelect={personaChange}
                        >
                            {persona.nombre}
                        </option>
                    ))
                }
            </select>
            <button className="confirmarCambio" onClick={onPrestamo}>
                confirmar
            </button>
        </td>
        <td>

        <button
            onClick={onDevolver}
        >
        <span className="tooltip">-
        <span class="tooltiptext">Devolver</span>
        </span>
        <ion-icon name="arrow-undo"></ion-icon>
        <span className="tooltip">-
            <span class="tooltiptext">Devolver</span>
        </span>
        </button>

        </td>
        </>
    )
}
