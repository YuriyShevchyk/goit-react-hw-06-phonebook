import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addContact: {
            reducer: (store, {payload}) => {
                store.push(payload);
            },
            prepare(name, number) {
                return {
                    payload:{
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        removeContact: (store, {payload}) =>
        store.filter(({id})=>id !==payload),
    },
});

export const {addContact ,removeContact} = itemsSlice.actions;

export default itemsSlice.reducer;