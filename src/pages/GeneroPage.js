import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startCargarGeneros } from '../actions/generos';
import { FormAgregarGenero } from '../components/genero/FormAgregarGenero';
import { GeneroCard } from '../components/genero/GeneroCard';

export const GeneroPage = () => {

    const dispatch = useDispatch();

    const { generos } = useSelector(state => state.genero);

    useEffect(() => {
        dispatch(startCargarGeneros());
    }, [dispatch]);


    return (
        <div>
            <h1>Genero Page</h1>

            <FormAgregarGenero />

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
