import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startCargarGeneros } from '../actions/generos';
import { FormAgregarGenero } from '../components/genero/FormAgregarGenero';
import { GeneroCard } from '../components/genero/GeneroCard';
// import "../styles/pages/pages.css";
import "../styles/pages/genero/generoPageStyle.css"


export const GeneroPage = () => {

    const dispatch = useDispatch();

    const { generos } = useSelector(state => state.genero);

    useEffect(() => {
        dispatch(startCargarGeneros());
    }, [dispatch]);

    return (

        <div className="estiloGenero">

                <h1>Página de Géneros</h1>

            <FormAgregarGenero />


            <h2>Lista de géneros existentes</h2>
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
