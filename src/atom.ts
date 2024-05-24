// atoms/bookingAtoms.ts
import { atom } from "jotai";

export const navMenuToggle = atom<boolean>(false);
export const scrolled = atom<boolean>(false);

export const startDateAtom = atom<string>("");
export const endDateAtom = atom<string>("");
export const availabilityAtom = atom<string>("");
export const bookingStatusAtom = atom<string>("");
