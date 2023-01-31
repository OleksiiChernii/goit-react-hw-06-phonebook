import { ContactsList } from './ContactsList';
import { CreateContact } from './CreateContact';
import { FilterContacts } from './FilterContacts';

export const App = () => {
  return (
    <>
      <CreateContact />
      <ContactsList />
      <FilterContacts />
    </>
  );
};
