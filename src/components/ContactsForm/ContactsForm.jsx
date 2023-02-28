import { useDispatch, useSelector } from 'react-redux';

import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

import { AddButton, Error, FormStyled, Input } from './ContactsForm.styled';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(6).max(16).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    if (
      !contacts.some(
        contact => contact.name === name || contact.number === number
      )
    ) {
      values.id = nanoid();
      dispatch(addContact(values));
      resetForm();
      console.log('New user');
    } else {
      console.log('Enter uniq date');
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled autoComplete="off">
        <label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <Error name="name" />
        </label>
        <label htmlFor="number">
          Telephone
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <Error name="number" />
        </label>
        <AddButton type="submit">Add contact</AddButton>
      </FormStyled>
    </Formik>
  );
};
