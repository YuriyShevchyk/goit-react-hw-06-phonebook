import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContact(state, action) {
      const id = nanoid();
      const { name, number } = action.payload;
      const notify = findedContact =>
        toast(`${findedContact.name} is already in contacts`, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });

      const findedContact = state.find(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      );

      if (findedContact) {
        notify(findedContact);
        return;
      } else {
        return [...state, { id, name, number }];
      }
    },

    deleteContact(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;