import useForm from '../../hooks/useForm';
import { Input, Button, Headline } from '../../patterns';
import {
  requiredRule,
  checkMobNumber,
} from '../../../utils/inputValidationRules';

export const formObj = {
  username: {
    value: '',
    validationRules: [requiredRule('username')],
  },
  mobile: {
    value: '',
    validationRules: [checkMobNumber()],
  },
};

export default function LoginForm(submit) {
  const { handleInputChange, isFormValid, getValues, getErrors } =
    useForm(formObj);

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
          headline='Hi, Login!'
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
            type='tel'
            name='mobile'
            placeholder='011-XXXX-XXXX'
            required
            onChange={handleInputChange}
            className='auth-form__input'
          />
        </div>
      </div>
      <div className='auth-form__group--submit'>
        <Button type='submit' className='auth-form__submit-btn'>
          Sign In
        </Button>
      </div>
    </form>
  );
}
