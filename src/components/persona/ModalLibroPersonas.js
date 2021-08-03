import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { cerrarModal } from '../../actions/ui';
import "../../styles/components/ModalLibrosPersona.css";

export const ModalLibrosPersona = ({
    component: Component,
    ...rest
}) => {

    const dispatch = useDispatch();

    const onModal = () => {
        dispatch(cerrarModal());
    }

    return (

        <div>
            <div id="modal-libros">
                <div className="modal-libros-contenido">
                    <div className="modal-libros-close">
                        <button onClick={onModal}><ion-icon name="close-circle-outline"></ion-icon></button>
                    </div>
                    <Component {...rest} />
                </div>
            </div>
        </div>


    )
}

ModalLibrosPersona.propTypes = {
    component: PropTypes.func.isRequired,
}
