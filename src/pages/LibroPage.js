import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startCargarLibros } from '../actions/libros';
import { BuscarPorGenero } from '../components/genero/BuscarPorGenero';
import { FormAgregarLibros } from '../components/libro/FormAgregarLibros';
import { LibroCard } from '../components/libro/LibroCard';


export const LibroPage = () => {

    const dispatch = useDispatch();

    const { libros } = useSelector(state => state.libro);

    useEffect(() => {
        dispatch(startCargarLibros());
    }, [dispatch]);


    return (
        <div>

            <FormAgregarLibros />

            <h1>LibroPage</h1>

            {
                libros?.map(libro => (
                    <LibroCard
                        key={libro._id}
                        {...libro}
                    />
                ))
            }

            <BuscarPorGenero />

        </div>
    )
}
