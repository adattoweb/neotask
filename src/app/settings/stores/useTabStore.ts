import { create } from "zustand"

export type TabType = "account" | "general" | "themes" | "sidebar" | "productivity" | "information"

interface TabStore {
  tab: TabType
  setTab: (tab: TabType) => void
}

export const useTabStore = create<TabStore>((set) => ({
  tab: "account",
  setTab: (tab:TabType) => set({tab})
}))