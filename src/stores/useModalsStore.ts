import { create } from "zustand";

export interface Modals {
    isAnalyticsOpen: boolean
    isThemesAddOpen:  boolean
    isLogoEditorOpen: boolean
    isNoteOpen: boolean
}

interface ModalsState {
  modals: Modals
  setModals: (value: Modals) => void;
  toggleModal: (key: keyof Modals) => void;
  closeModals: () => void;
}

export const useModalsStore = create<ModalsState>((set, get) => ({
  modals: { isAnalyticsOpen: false, isThemesAddOpen: false, isNoteOpen: false, isLogoEditorOpen: false },
  setModals: (modals) => {
    set({ modals });
  },
  toggleModal: (key:string) => {
    const current = get().modals;
    const newModals: Modals = { ...current } as Modals;

    (Object.keys(current) as (keyof Modals)[]).forEach((k) => {
      newModals[k] = k === key ? !current[k] : false;
    });

    set({ modals: newModals });
  },
  closeModals: () => {
    set({ modals: { isAnalyticsOpen: false, isThemesAddOpen: false, isNoteOpen: false, isLogoEditorOpen: false }})
  }
}))