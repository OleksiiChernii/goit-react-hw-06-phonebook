import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/selectors';
import { ContactItem } from './ContactItem';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map(contact => <ContactItem key={contact.id} {...contact} />)}
    </ul>
  );
};
