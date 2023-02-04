import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filterHandler = query => {
    dispatch(setFilter(query));
  };
  
  return (
    <>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        onInput={e => filterHandler(e.target.value)}
      />
    </>
  );
};
