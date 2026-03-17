import { create } from "zustand";

interface NoteData {
   title: string | undefined
   project: string | undefined
   text: string | undefined
}

interface NoteState {
   note: NoteData
   setNote: (value: NoteData) => void
}

export const useNoteStore = create<NoteState>(set => ({
   note: {title: undefined, project: undefined, text: undefined},
   setNote: (note) => set({note})
}))