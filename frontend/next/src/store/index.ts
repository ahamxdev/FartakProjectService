import { create } from "zustand";

type Store = {
	open: boolean;
	setOpen: (newState: boolean) => void;
};

export const useDrawerStore = create<Store>()((set) => ({
	open: false,
	setOpen: (newState) => set({ open: newState }),
}));
