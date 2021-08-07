import useForm from '../../hooks/useForm';
import { Input, Button, DatePicker, Headline } from '../../patterns';
import {
  requiredRule,
  minAgeRule,
  checkMobNumber,
} from '../../../utils/inputValidationRules';

export const formObj = {
  username: {
    value: '',
    validationRules: [requiredRule('Username')],
  },
  password: {
    value: '',
    validationRules: [requiredRule('Password')],
  },
  mobile: {
    value: '',
    validationRules: [checkMobNumber()],
  },
  dob: {
    value: '',
    validationRules: [minAgeRule()],
  },
};

export default function SignupForm({ submit }) {
  const { handleInputChange, isFormValid, getValues, getErrors } =
    useForm(formObj);

  const handleDateChange = (date) => {
    handleInputChange(undefined, 'dob', date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      submit(getValues());
    } else {
      const msg = Object.values(getErrors()).reduce(
        (msg, errMsg) => (msg += '\r' + errMsg + '\r'),
        ''
      );
      alert(msg);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='auth-form'>
      <div className='auth-form__inputs-wrapper'>
        <Headline
          headline='Create your account!'
          semanticElement='h2'
          alignmentDesktop='center'
        />
        <div className='auth-form__group'>
          <Input
            type='text'
            name='username'
            placeholder='Username'
            required
            onChange={handleInputChange}
            className='auth-form__input'
          />
        </div>
        <div className='auth-form__group'>
          <Input
            type='password'
            name='password'
            placeholder='Password'
            required
            onChange={handleInputChange}
            className='auth-form__input'
          />
        </div>
        <div className='auth-form__group'>
          <Input
            type='tel'
            name='mobile'
            placeholder='011-XXXX-XXXX'
            required
            onChange={handleInputChange}
            className='auth-form__input'
          />
        </div>
        <div className='auth-form__group'>
          <DatePicker onChange={handleDateChange} />
        </div>
      </div>
      <div className='auth-form__group--submit'>
        <Button type='submit' className='auth-form__submit-btn'>
          Sign Up
        </Button>
      </div>
    </form>
  );
}
