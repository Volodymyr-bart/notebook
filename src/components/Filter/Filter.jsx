import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

import { FilterBlock } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FilterBlock>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilterValue(e.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </FilterBlock>
  );
};
