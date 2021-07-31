import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCargarLibros } from '../actions/libros';
import { startCargarPersonas } from '../actions/personas';
import { abrirModal } from '../actions/ui';
import { Modal } from '../components/Modal';
import { FormAgregarPersona } from '../components/persona/FormAgregarPersona';
import { PersonaCard } from '../components/persona/PersonaCard';
// import './css/pages.css';
import './css/personaPageStyle.css';

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
        <div className="estiloFormularioPersona">
            
            
            <h1>Página de Personas</h1>
                
            
            <button className="estiloBotonAgregarPersona" onClick={onModal}> <ion-icon name="add-circle"></ion-icon></button>
            {
                (modalOpen && !id) && (
                    <Modal component={FormAgregarPersona} modalOpen={modalOpen} />
                )
            }
                
                    <p>Agregar nueva persona</p>
            

            <h2>Lista de personas existentes</h2>
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
