import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState('Need write name');
  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('Need write email');
  const [password, setPassword] = useState('');
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState('Need write password');
  const [formValid, setformValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || passwordError) {
      setformValid(false);
    } else {
      setformValid(true);
    }
  }, [nameError, emailError, passwordError]);

  const dispatch = useDispatch();

  const blurHandler = e => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;

      default:
        break;
    }
  };

  const nameHandler = e => {
    setName(e.target.value);
    if (e.target.value.length < 3) {
      setNameError('Enter name more 3 symbols');
    } else {
      setNameError('');
    }
  };
  const emailHandler = e => {
    setEmail(e.target.value);

    if (
      !String(e.target.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailError('Ivalid Email');
    } else {
      setEmailError('');
    }
  };
  const passwordHandler = e => {
    setPassword(e.target.value);
    if (e.target.value.length < 7) {
      setPasswordError('Password must longest 7 symbols');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      {nameDirty && nameError && (
        <div style={{ color: 'red' }}>{nameError}</div>
      )}
      <TextField
        value={name}
        onBlur={e => blurHandler(e)}
        name="name"
        type="text"
        placeholder="Enter your name"
        onChange={e => nameHandler(e)}
      />
      {emailDirty && emailError && (
        <div style={{ color: 'red' }}>{emailError}</div>
      )}
      <TextField
        value={email}
        onBlur={e => blurHandler(e)}
        name="email"
        type="email"
        placeholder="Enter your email"
        onChange={e => emailHandler(e)}
      />
      {passwordDirty && passwordError && (
        <div style={{ color: 'red' }}>{passwordError}</div>
      )}
      <TextField
        value={password}
        onBlur={e => blurHandler(e)}
        name="password"
        type="password"
        placeholder="Enter your password"
        onChange={e => passwordHandler(e)}
      />
      <Button variant="contained" disabled={!formValid} type="submit">
        Register
      </Button>
    </form>
  );
};

//  const handleSubmit = e => {
//    e.preventDefault();
//    const form = e.currentTarget;
//    dispatch(
//      register({
//        name: form.elements.name.value,
//        email: form.elements.email.value,
//        password: form.elements.password.value,
//      })
//    );
//    form.reset();
//  };

// return (
//   <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//     <label className={css.label}>
//       Username
//       <input type="text" name="name" />
//     </label>
//     <label className={css.label}>
//       Email
//       <input type="email" name="email" />
//     </label>
//     <label className={css.label}>
//       Password
//       <input type="password" name="password" />
//     </label>
//     <button type="submit">Register</button>
//   </form>
// );
