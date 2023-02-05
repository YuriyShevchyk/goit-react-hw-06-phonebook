import { SearchInput } from 'components/ContactForm/SearchInput.styled';
import { FormTitle } from 'components/ContactForm/FormTitle';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/filterSlice';

export const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <FormTitle title="Find contacts by name">
      <SearchInput
        type="text"
        name="filter"
        value={value}
        onChange={evt => dispatch(filterChange(evt.currentTarget.value))}
      />
    </FormTitle>
  );
};