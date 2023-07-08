import { writable } from 'svelte/store';
import type { MajorMinor, NoteName } from '../theory';

export const fretboardKey = writable<NoteName>('E');
export const fretboardKeyMajorMinor = writable<MajorMinor>('major');
export const fretboardFretCount = writable<number>(22);
export const inKeyFinderMode = writable(false);
