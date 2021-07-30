import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startCargarGeneros } from '../actions/generos';
import { abrirModal } from '../actions/ui';
import { FormAgregarGenero } from '../components/genero/FormAgregarGenero';
import { GeneroCard } from '../components/genero/GeneroCard';
import { Modal } from '../components/Modal';

export const GeneroPage = () => {

    const dispatch = useDispatch();

    // const { modalOpen, id } = useSelector(state => state.ui)
    const { generos } = useSelector(state => state.genero);

    useEffect(() => {
        dispatch(startCargarGeneros());
    }, [dispatch]);

    // const onModal = () => {
    //     dispatch(abrirModal());
    // };

    return (
        <div>
            <h1>Genero Page</h1>

            {/* <button onClick={onModal}>Agregar Genero</button>
            {
                (modalOpen && !id) && (
                    <Modal component={FormAgregarGenero} modalOpen={modalOpen} />
                )
            } */}

            {
                generos?.map(genero => (
                    <GeneroCard
                        key={genero._id}
                        {...genero}
                    />
                ))
            }

        </div>
    )
}
