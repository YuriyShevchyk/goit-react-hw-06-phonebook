import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Box } from 'components/Box';
import { FormTitle } from './FormTitle';
import { Button } from 'components/Button/Button';
import { Error, Input } from './SearchInput.styled';
import { addContact } from 'redux/contactsSlice';
import { useState } from 'react';


const initialValues = {
  name: '',
  number: '',
};

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.number('Phone number must be a "Number" type').required(
    'Please, enter valid Phone Number'
  ),
});

export const ContactForm = () => {
 
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // const resetForm = () => {
  //   setName('');
  //   setNumber('');
  // };

  // const notify = findedContact =>
  //       toast(`${findedContact.name} is already in contacts`, {
  //         position: 'top-right',
  //         autoClose: 2000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: 'dark',
  //       });

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const contact = { name, number };
  //   const findedContact = contact.find(contact =>
  //         contact.name.toLowerCase().includes(name.toLowerCase())
  //       );
  
  //       if (findedContact) {
  //         notify(findedContact);
  //         return;
  //       } else {
          
    // dispatch(addContact(contact));
  //   resetForm();
  // };

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   if (name === 'name') setName(value);
  //   if (name === 'number') setNumber(value);
  // };

  return (
    <Box p={4} border="normal" maxWidth="400px" mb={5}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(addContact(values, actions));
          actions.resetForm();
        }}
        validationSchema={schema}
      >
        <Form>
          <FormTitle title="Name" htmlFor="name">
            <Input type="text" name="name" />
            <ErrorMessage name="name" component={Error} />
          </FormTitle>
          <FormTitle title="Number" htmlFor="number">
            <Input type="tel" name="number" />
            <ErrorMessage name="number" component={Error} />
          </FormTitle>
          <Button type="submit" text="Add contact" />
        </Form>
      </Formik>
    </Box>
  );
};