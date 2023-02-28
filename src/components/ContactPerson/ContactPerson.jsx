import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { DeleteButton, PersonStyled } from './ContactPerson.styled';
import { deleteContact } from 'redux/contacts/operations';

export const ContactPerson = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <PersonStyled spacing={2}>
      <span>
        {name}: {number}
      </span>

      <DeleteButton
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </DeleteButton>
    </PersonStyled>
  );
};

ContactPerson.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
