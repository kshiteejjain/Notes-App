import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

type NotesState = {
  notesList: string[];
  id: number;
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
  }
})

export const { addNotes, deleteNotes } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.notes.notesList

export default counterSlice.reducer