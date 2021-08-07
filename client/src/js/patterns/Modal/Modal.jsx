import React from 'react';
import Backdrop from '../Backdrop';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import './modal.scss';

const Modal = ({ close, show, headline, children }) => (
  <Backdrop show={show} onClick={close}>
    <div onClick={(e) => e.stopPropagation()} className='modal'>
      <div className='modal__inner'>
        <div className='modal__header'>
          <div className='modal__headline'>{headline}</div>
          <ButtonIcon
            onClick={close}
            className='modal__close'
            iconName='close'
          />
        </div>
        <div className='modal__body'>{children}</div>
      </div>
    </div>
  </Backdrop>
);

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
  headline: PropTypes.string,
};

export default Modal;
