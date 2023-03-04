import { ToastContainer } from 'react-toastify';
import { Title } from './Title/AppTitle';
import { ContactForm }  from './ContactForm/ContactForm';
import { SectionTitle } from './Title/SectionTitle';
import { Filter } from './Filter/Filter';
import { ContactList } from './FriendList/FriendList';
import { Box } from './Box';

export const App = () => {
  return (
    <Box maxWidth="1000px" my={0} mx="auto" px={4}>
      <Title text="Phonebook" />
      <ContactForm />
      <SectionTitle text="Contacts" />
      <Filter />
      <ContactList />
      <ToastContainer />
    </Box>
  );
};