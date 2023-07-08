<script lang="ts">
	import clsx from 'clsx';
	import { fretboardKey, fretboardKeyMajorMinor } from '../stores/fretboard';
	import { notes } from '../theory';

	const selectStyles =
		'select' ??
		' focus:ring-0 text-[18px] rounded px-3 py-3 text-orange-400 font-bold bg-transparent border-0 w-[130px] hover:bg-white/10';
</script>

<div class="flex gap-10">
	<div class="space-y-2">
		<h1 class="text-[32px] pl-3 pb-2">Key</h1>
		<select bind:value={$fretboardKey} class={clsx('max-w-[100px]', selectStyles)}>
			{#each notes as note}
				<option value={note}> {note} </option>
			{/each}
		</select>

		<select bind:value={$fretboardKeyMajorMinor} class={clsx('max-w-[100px]', selectStyles)}>
			<option value="major"> Major </option>
			<option value="minor"> Minor </option>
		</select>
	</div>
</div>
