import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  mode: "retro" | "business";
  toggleMode: (theme: "retro" | "business") => void;
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
