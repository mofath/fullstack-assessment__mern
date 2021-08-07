import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import { Input, Button, Select, FileUploader } from '../../patterns';
import { requiredRule } from '../../../utils/inputValidationRules';
import './add-product-form.scss';

export const formObj = {
  name: {
    value: '',
    validationRules: [requiredRule('Product name')],
  },
  quantity: {
    value: '',
    validationRules: [requiredRule('Product quantity')],
  },
  price: {
    value: '',
    validationRules: [requiredRule('Product price')],
  },
};

const options = [
  { id: 1, title: 'Mobiles' },
  { id: 2, title: 'Accessories' },
];

const AddProductForm = ({ submit }) => {
  const [selectedCateory, setSelectedCategory] = useState(options[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  const { handleInputChange, isFormValid, getValues, getErrors } =
    useForm(formObj);

  const handleSelectChange = (event) => {
    setSelectedCategory(
      options.find((option) => option.id === event.target.value)
    );
  };

  const onFileSelectError = ({ error }) => {
    alert(error);
  };

  const onFileSelectSuccess = (file) => {
    setSelectedImage(file);
    const formData = new FormData();
    formData.append('name', 'image');
    formData.append('file', file);
    //TODO: call upload image service
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      const values = { ...getValues(), categoryId: selectedCateory };
      submit(values);
    } else {
      const msg = Object.values(getErrors()).reduce(
        (msg, errMsg) => (msg += '\r' + errMsg + '\r'),
        ''
      );
      alert(msg);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='add-product-form'>
      <div className='add-product-form__group'>
        <Input
          type='text'
          name='name'
          placeholder='Product Name'
          required
          onChange={handleInputChange}
          className='add-product-form__input'
        />
      </div>
      <div className='add-product-form__group'>
        <Input
          type='number'
          name='price'
          placeholder='Price'
          required
          onChange={handleInputChange}
          className='add-product-form__input'
        />
      </div>
      <div className='add-product-form__group'>
        <Input
          type='number'
          name='quantity'
          placeholder='Quantity'
          required
          onChange={handleInputChange}
          className='add-product-form__input'
        />
      </div>
      <div className='add-product-form__group'>
        <Select
          className='add-product-form__input add-product-form__input--select'
          value={selectedCateory}
          onChange={handleSelectChange}
          options={options}
        />
      </div>
      <div className='add-product-form__group'>
        <FileUploader
          onFileSelectError={onFileSelectError}
          onFileSelectSuccess={onFileSelectSuccess}
        />
      </div>
      <div className='add-product-form__group--submit'>
        <Button type='submit' className='add-product-form__submit-btn'>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AddProductForm;
