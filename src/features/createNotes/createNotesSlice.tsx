import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

type NotesState = {
  notesList: string[];
  id: number;
  title: string,
  description: string,
};


export const counterSlice = createSlice({
  name: 'notes',
  initialState: {
    notesList: [],
  } as unknown as NotesState,
  reducers: {
    addNotes: (state, action) => {
      state.notesList.push(action.payload);
    },
    deleteNotes: (state, action) => {
      state.notesList.splice(action.payload, 1)
   },
   editNotes: (state, action) => {
    const {id, title, description} = action.payload;
    const existingUser = state.notesList.find((item: any) => item.id === id);
    if(existingUser) {
      existingUser.title = title;
      existingUser.description = description;
    } as NotesState,
  }
  }
})

export const { addNotes, deleteNotes, editNotes } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.notes.notesList

export default counterSlice.reducer