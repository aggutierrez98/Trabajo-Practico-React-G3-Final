import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCargarLibros } from '../actions/libros';
import { startCargarPersonas } from '../actions/personas';
import { PersonaCard } from '../components/persona/PersonaCard';

export const PersonaPage = () => {

    const dispatch = useDispatch();

    const { personas } = useSelector(state => state.persona);

    useEffect(() => {
        dispatch(startCargarPersonas());
        dispatch(startCargarLibros())
    }, [dispatch]);

    return (
        <div>
            <h1>PersonaPage</h1>

            {
                personas?.map(persona => (
                    <PersonaCard
                        key={persona._id}
                        {...persona}
                    />
                ))
            }
        </div>
    )
}
