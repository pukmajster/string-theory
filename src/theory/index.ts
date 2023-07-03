/*********************************************************
 *
 * NOTES
 *
 ********************************************************/

export type NoteName =
	| 'C'
	| 'C# / Ab'
	| 'C#'
	| 'Ab'
	| 'D'
	| 'D# / Eb'
	| 'D#'
	| 'Eb'
	| 'E'
	| 'F'
	| 'F# / Gb'
	| 'F#'
	| 'Gb'
	| 'G'
	| 'G# / Ab'
	| 'G#'
	| 'Ab'
	| 'A'
	| 'A# / Bb'
	| 'A#'
	| 'Bb'
	| 'B';

export const notes: NoteName[] = [
	'C',
	'C# / Ab',
	'D',
	'D# / Eb',
	'E',
	'F',
	'F# / Gb',
	'G',
	'G# / Ab',
	'A',
	'A# / Bb',
	'B'
];

export function simplifyNotesToSharp(notes: NoteName[]): NoteName[] {
	const simplified = notes;

	for (let index = 0; index < notes.length; index++) {
		switch (notes[index]) {
			case 'C# / Ab':
				simplified[index] = 'C#';
				break;
			case 'D# / Eb':
				simplified[index] = 'D#';
				break;
			case 'F# / Gb':
				simplified[index] = 'F#';
				break;
			case 'G# / Ab':
				simplified[index] = 'G#';
				break;
			case 'A# / Bb':
				simplified[index] = 'A#';
				break;
		}
	}

	return simplified;
}

export function simplifyNoteToSharp(note: NoteName): NoteName {
	switch (note) {
		case 'C# / Ab':
			return 'C#';
		case 'D# / Eb':
			return 'D#';
		case 'F# / Gb':
			return 'F#';
		case 'G# / Ab':
			return 'G#';
		case 'A# / Bb':
			return 'A#';
		default:
			return note;
	}
}

export function getNoteInKeyByIndexWrapping(key: NoteName, relativeIndex: number): NoteName {
	const startingIndex = notes.indexOf(key);
	const wrappedIndex = (startingIndex + relativeIndex) % notes.length;

	return notes[wrappedIndex];
}

export function makeFretboardStringNotes(key: NoteName, amountOfSteps: number): NoteName[] {
	const startingIndex = notes.indexOf(key);
	const notesInFretboard: NoteName[] = [];

	for (let i = startingIndex; i < amountOfSteps + startingIndex; i++) {
		notesInFretboard.push(notes[i % notes.length]);
	}

	return notesInFretboard;
}

/*********************************************************
 *
 * SCALES
 *
 ********************************************************/

export type ScaleType = 'major' | 'minor';

// Major scale pattern: W-W-H-W-W-W-H
export function majorScale(key: NoteName): NoteName[] {
	const scale = [
		// Root
		getNoteInKeyByIndexWrapping(key, 0),
		getNoteInKeyByIndexWrapping(key, 2),
		getNoteInKeyByIndexWrapping(key, 4),
		getNoteInKeyByIndexWrapping(key, 5),
		getNoteInKeyByIndexWrapping(key, 7),
		getNoteInKeyByIndexWrapping(key, 9),
		getNoteInKeyByIndexWrapping(key, 11),
		getNoteInKeyByIndexWrapping(key, 12)
	];

	return scale;
}

// Minor scale pattern: W-H-W-W-H-W-H
export function minorScale(key: NoteName): NoteName[] {
	const scale = [
		// Root
		getNoteInKeyByIndexWrapping(key, 0),
		getNoteInKeyByIndexWrapping(key, 2),
		getNoteInKeyByIndexWrapping(key, 3),
		getNoteInKeyByIndexWrapping(key, 5),
		getNoteInKeyByIndexWrapping(key, 7),
		getNoteInKeyByIndexWrapping(key, 8),
		getNoteInKeyByIndexWrapping(key, 10),
		getNoteInKeyByIndexWrapping(key, 12)
	];

	return scale;
}

/*********************************************************
 *
 * TUNINGS
 *
 ********************************************************/

type Tunings = {
	[name: string]: TuningDetails;
};

type TuningDetails = {
	name: string;
	tuning: Tuning;
};

type Tuning = NoteName[];

export const COMMON_TUNINGS: Tunings = {
	standard: {
		name: 'E Stardard',
		tuning: ['E', 'A', 'D', 'G', 'B', 'E']
	}
};
