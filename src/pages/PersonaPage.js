import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCargarLibros } from '../actions/libros';
import { startCargarPersonas } from '../actions/personas';
import { abrirModal } from '../actions/ui';
import { Modal } from '../components/Modal';
import { FormAgregarPersona } from '../components/persona/FormAgregarPersona';
import { PersonaCard } from '../components/persona/PersonaCard';
// import './css/pages.css';

export const PersonaPage = () => {

    const dispatch = useDispatch();

    const { modalOpen, id } = useSelector(state => state.ui)

    const { personas } = useSelector(state => state.persona);

    useEffect(() => {
        dispatch(startCargarPersonas());
        dispatch(startCargarLibros())
    }, [dispatch]);

    const onModal = () => {
        dispatch(abrirModal());
    };

    return (
        <div className="contactForm">
            <h1>PersonaPage</h1>

            <button onClick={onModal}>Agregar Persona</button>
            {
                (modalOpen && !id) && (
                    <Modal component={FormAgregarPersona} modalOpen={modalOpen} />
                )
            }

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
