import { writable } from 'svelte/store';
import type { NoteName, ScaleType } from '../theory';

export const fretboardKey = writable<NoteName>('E');
export const fretboardScaleType = writable<ScaleType>('major');
export const fretboardFretCount = writable<number>(22);
