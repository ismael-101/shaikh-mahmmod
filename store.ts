import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  mode: "retro" | "forest";
  toggleMode: (theme: "retro" | "forest") => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "retro",
      toggleMode: (theme) => set((state) => ({ mode: theme })),
    }),
    { name: "theme-store" }
  )
);
