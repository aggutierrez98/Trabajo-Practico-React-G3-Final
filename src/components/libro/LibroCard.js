import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startActualizarLibro, startBorrarLibro, startDevolverLibro, startPrestarLibro } from '../../actions/libros';

export const LibroCard = ({ id }) => {

    const dispatch = useDispatch();

    const { personas } = useSelector(state => state.persona);
    const { libros } = useSelector(state => state.libro);

    const [libro, setLibro] = useState({});

    const { nombre, descripcion, persona_id } = libro;

    const [persona, setPersona] = useState({});

    const [prestando, setPrestando] = useState(false);

    const [formValues, handleInputChange, reset] = useForm({
        descripcion: "",
    });

    const { descripcion: desc } = formValues;

    const onPrestar = () => {
        prestando ? setPrestando(false) : setPrestando(true);
    };

    const onPrestamo = (persona_id) => {
        dispatch(startPrestarLibro(id, persona_id));
        setPrestando(false);
    }

    const onDevolver = () => {
        dispatch(startDevolverLibro(id));
    };

    const onBorrar = () => {
        dispatch(startBorrarLibro(id))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(startActualizarLibro(id, desc))
        reset();
    }

    useEffect(() => {

        const libroEncontrado = libros.find(lib => lib._id === id);
        setLibro(libroEncontrado);

    }, [id, libros])


    useEffect(() => {

        const personaEncontrada = personas.find(p => p._id === persona_id);
        setPersona(personaEncontrada);

    }, [persona_id, personas])


    return (
        <div>
            <h2>Nombre:</h2>
            <p>{nombre}</p>

            <h2>Descripcion: </h2>
            <p>{descripcion}</p>

            {
                persona &&
                (<div>
                    <h2>Prestado a</h2>
                    <p>{persona.nombre}</p>
                </div>
                )
            }


            <button
                onClick={onPrestar}
            >
                Prestar a
            </button>

            {
                prestando &&
                personas.map((persona) => (
                    <div
                        key={persona._id}
                        onClick={() => onPrestamo(persona._id)}
                    >
                        {persona.nombre}
                    </div>
                ))
            }

            <button
                onClick={onDevolver}
            >
                Devolver
            </button>
            <button
                onClick={onBorrar}
            >
                Borrar
            </button>

            <h3>Actualizar</h3>

            <form onSubmit={onSubmit}>
                <input type="text" name="descripcion" onChange={handleInputChange} value={desc} placeholder="Ingresar descripcion" autoComplete="off"></input>
                <button type="submit"> Hecho </button>
            </form>

            <br></br>
        </div>
    )
}
