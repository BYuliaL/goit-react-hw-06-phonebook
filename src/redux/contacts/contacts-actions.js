import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContacts = createAction('contact/add', (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});
const deleteContacts = createAction('contact/delete');
const changeFilter = createAction('contacts/filter');

// const addContacts = (name, number) => ({
//   type: types.ADD_CONTACT,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

// const deleteContacts = contactId => ({
//   type: types.DELETE_CONTACT,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.FILTER_CONTACTS,
//   payload: value,
// });

const actions = {
  addContacts,
  deleteContacts,
  changeFilter,
};

export default actions;
