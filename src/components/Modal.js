import React from 'react'
import PropTypes from 'prop-types'
import "../styles/components/Modal.css"
import { useDispatch } from 'react-redux';
import { cerrarModal } from '../actions/ui';

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
            <div id="miModal" className="modal">
                <div className="modal-contenido">
                    <button onClick={onModal}>X</button>
                    <Component {...rest} />
                </div>
            </div>
        </div>


    )
}

Modal.propTypes = {
    component: PropTypes.func.isRequired,
}
