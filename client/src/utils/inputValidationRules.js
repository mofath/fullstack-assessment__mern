const createValidationRule = (ruleName, errorMessage, validateFunc) => {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validateFunc,
  };
};

const isNumber = (str) => {
  var pattern = /^\d+$/;
  return pattern.test(str);
};

const isEgyMobileNum = (value = '') => {
  value = typeof value === 'string' ? value : value.toString();

  const validationSet = ['010', '011', '012', '015'];

  if (
    isNumber(value) &&
    validationSet.includes(value.substr(0, 3)) &&
    value?.length === 11
  ) {
    return true;
  }

  return false;
};

const underAgeValidate = (birthday, ageLimit = 18) => {
  var currentDate = new Date().toJSON().slice(0, 10) + ' 01:00:00';

  const age = ~~((Date.now(currentDate) - birthday) / 31557600000);

  return age > ageLimit;
};

export const requiredRule = (inputName) => {
  return createValidationRule(
    'required',
    `${inputName} required`,
    (inputValue = '') => inputValue?.length !== 0
  );
};

export const minAgeRule = () => {
  return createValidationRule('minAge', `Must be +18 years old`, (inputValue) =>
    underAgeValidate(inputValue)
  );
};

export const checkMobNumber = () => {
  return createValidationRule(
    'egyMobNumber',
    `Enter a valid mobile number`,
    (inputValue) => isEgyMobileNum(inputValue)
  );
};
