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
        <div>
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

            <button onClick={onPrestamo}>
                Ok
            </button>

            <br></br>
            <br></br>

            <button
                onClick={onDevolver}
            >
                Devolver
            </button>

        </div>
    )
}
