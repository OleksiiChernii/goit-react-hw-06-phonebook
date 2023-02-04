import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { selectFilteredContacts } from '../redux/selectors';

export const CreateContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handler = ({ name, number }) => {
    const contact = contacts.find(c => c.name.toLowerCase() === name.toLowerCase());
    if (contact) {
      alert(`there's already a contact with ${name} in phonebook`);
      return;
    }
    dispatch(addContact({ id: nanoid(), name, number: Number(number) }));
  };
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          const [name, number] = e.target;
          handler({ name: name.value, number: number.value });
          name.value = '';
          number.value = '';
        }}
      >
        <label>
          Name
          <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label>
          Number
          <br />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
