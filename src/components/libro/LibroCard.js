import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startActualizarLibro, startBorrarLibro, startDevolverLibro, startPrestarLibro } from '../../actions/libros';
import { buscarPersona, startCargarPersonas } from '../../actions/personas';

export const LibroCard = ({ nombre, descripcion, persona_id, _id: id }) => {

    const dispatch = useDispatch();

    const { personas } = useSelector(state => state.persona);

    const [persona, setPersona] = useState({});

    const [prestando, setPrestando] = useState(false);

    const [formValues, handleInputChange, reset] = useForm({
        descripcion: "",
    });

    const { descripcion: desc } = formValues;

    const onPrestar = () => {
        prestando ? setPrestando(false) : setPrestando(true)
    };

    const onPrestamo = (persona_id) => {
        dispatch(startPrestarLibro(id, persona_id))
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
        dispatch(startCargarPersonas());

        const cargarPersona = async () => {
            const personaEncontrada = await buscarPersona(persona_id);
            setPersona(personaEncontrada);
        }

        if (persona_id) {
            cargarPersona();
        }

    }, [dispatch, persona_id])


    return (
        <div>
            <h2>Nombre:</h2>
            <p>{nombre}</p>

            <h2>Descripcion: </h2>
            <p>{descripcion}</p>

            {
                persona.nombre &&
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
                <input type="text" name="descripcion" onChange={handleInputChange} value={desc} placeholder="Ingresar descripcion"></input>
                <button type="submit"> Hecho </button>
            </form>

            <br></br>
        </div>
    )
}
