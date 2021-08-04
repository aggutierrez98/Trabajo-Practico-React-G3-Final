import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { cerrarModal } from '../actions/ui';
import "../styles/components/Modal.css"

export const Modal = ({
    component: Component,
    ...rest
}) => {

    const dispatch = useDispatch();

    const onModal = () => {
        dispatch(cerrarModal());
    }

    return (

        <div>
            <div id="modal">
                <div id="modal-contenido">
                    <div id="modal-close">
                        <button onClick={onModal}><ion-icon name="close-circle-outline"></ion-icon></button>
                    </div>
                    <Component {...rest} />
                </div>
            </div>
        </div>


    )
}

Modal.propTypes = {
    component: PropTypes.func.isRequired,
}
