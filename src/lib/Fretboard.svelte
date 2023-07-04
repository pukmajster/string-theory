<script lang="ts">
	import clsx from 'clsx';
	import { fretboardFretCount, fretboardKey, fretboardScaleType } from '../stores/fretboard';
	import {
		COMMON_TUNINGS,
		majorScale,
		makeFretboardStringNotes,
		minorScale,
		simplifyNoteToSharp
	} from '../theory';

	const tuning = COMMON_TUNINGS.standard.tuning;

	$: scaleFunction = $fretboardScaleType === 'major' ? majorScale : minorScale;
	$: scaleNotes = scaleFunction($fretboardKey);
</script>

<div class=" h-full mx-auto flex flex-col-reverse justify-center items-center">
	{#each tuning as startingNote, i}
		{@const notesInString = makeFretboardStringNotes(startingNote, $fretboardFretCount)}

		<div
			class="grid w-full"
			style={`grid-template-columns: repeat(${$fretboardFretCount}, minmax(0, 1fr));`}
		>
			{#each notesInString as note, i}
				{@const isNoteInScale = scaleNotes.includes(note)}
				<div
					class={clsx(
						'flex m-1 relative text-sm w-[30px] h-[30px] bg-neutral-900/50 justify-center items-center p-2 rounded-full',
						{
							'!bg-emerald-600': isNoteInScale,
							'after:right-[-5px] after:w-[2px] after:h-[130%] after:bg-black after:absolute':
								i === 0
						}
					)}
				>
					{simplifyNoteToSharp(note)}
				</div>
			{/each}

			{#if i === 0}
				{#each { length: $fretboardFretCount } as _, i}
					<div class="flex justify-center">
						{#if i == 12} &diam; &diam; {/if}
						{#if [3, 5, 7, 9, 15, 17, 19].includes(i)} &diam; {/if}
					</div>
				{/each}
			{/if}
		</div>
	{/each}
</div>
