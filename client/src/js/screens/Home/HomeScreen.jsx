import React, { useState } from 'react';
import { ButtonIcon } from '../../patterns';
import { Modal } from '../../patterns';
import { AddProductForm } from '../../components';
import './home-screen.scss';

const HomeScreen = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const openAddProductModal = () => setShowAddProductModal(true);
  const closeAddProductModal = () => setShowAddProductModal(false);

  return (
    <div className='home-screen'>
      <div className='home-screen__add-broduct-fab-wrapper'>
        <ButtonIcon
          iconName='plusCircle'
          onClick={openAddProductModal}
          className='home-screen__add-broduct-fab'
        />

        <Modal
          open={openAddProductModal}
          close={closeAddProductModal}
          show={showAddProductModal}
          headline='Add Product'
        >
          <AddProductForm />
        </Modal>
      </div>
    </div>
  );
};

export default HomeScreen;
