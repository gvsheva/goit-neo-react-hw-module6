import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Contact } from "../model";

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [] as Contact[],
    },
    reducers: {
        addContact(state, action: PayloadAction<Contact>) {
            state.items.push(action.payload);
        },
        deleteContact(state, action: PayloadAction<string>) {
            state.items = state.items.filter(
                (contact) => contact.id !== action.payload,
            );
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
