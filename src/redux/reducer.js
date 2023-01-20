import { combineReducers } from '@reduxjs/toolkit';

import items from 'redux/ItemSlice';
import filter from 'redux/filterSlice';

const contactReducer = combineReducers({
  items,
  filter,
});

export default contactReducer;