import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContacts]: (state, action) => [action.payload, ...state],
  [actions.deleteContacts]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return [...state, payload];

//     case types.DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER_CONTACTS:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({ items, filter });
