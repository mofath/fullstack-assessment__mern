import { useState, useCallback, useEffect } from 'react';

function useForm(formObj) {
  const [form, setForm] = useState(formObj);

  const isInputFieldValid = useCallback(
    (inputField) => {
      for (const rule of inputField.validationRules) {
        if (!rule.validate(inputField.value, form)) return false;
      }

      return true;
    },
    [form]
  );

  const getValues = () =>
    Object.keys(formObj).reduce((obj, inputKey) => {
      return {
        ...obj,
        [inputKey]: formObj[inputKey].value,
      };
    }, {});

  const getErrors = () =>
    Object.keys(formObj).reduce((obj, inputKey) => {
      return {
        ...obj,
        [inputKey]: !formObj[inputKey].valid
          ? formObj[inputKey].validationRules[0].message
          : '',
      };
    }, {});

  const handleInputChange = useCallback(
    (event, customName, customValue) => {
      const { name, value } = event?.target || {};

      const inputObj = form[name || customName];
      inputObj.value = value || customValue;

      const isValidInput = isInputFieldValid(inputObj);
      if (isValidInput && !inputObj.valid) {
        inputObj.valid = true;
      } else if (!isValidInput && inputObj.valid) {
        inputObj.valid = false;
      }

      setForm({ ...form, [name || customName]: inputObj });
    },
    [form, isInputFieldValid]
  );

  const isFormValid = useCallback(() => {
    let isValid = true;
    const arr = Object.values(form);

    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].valid) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }, [form]);

  useEffect(() => {
    console.log('form', form);
  }, [form]);

  return {
    handleInputChange,
    isFormValid,
    form,
    getValues,
    getErrors,
  };
}

export default useForm;
