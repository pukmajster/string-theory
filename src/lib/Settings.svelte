<script lang="ts">
	import clsx from 'clsx';
	import { fretboardKey, fretboardScaleType } from '../stores/fretboard';
	import { notes } from '../theory';

	const selectStyles =
		' focus:ring-0 text-[18px] rounded px-3 py-3 text-orange-400 font-bold bg-transparent border-0 w-[130px] hover:bg-white/10';
</script>

<div class="flex gap-10">
	<div class="space-y-1">
		<h1 class="text-[32px] pl-3">Key</h1>
		<select bind:value={$fretboardKey} class={clsx(selectStyles)}>
			{#each notes as note}
				<option value={note}> {note} </option>
			{/each}
		</select>
	</div>

	<div class="space-y-1">
		<h1 class="text-[32px] pl-3">Scale</h1>
		<select bind:value={$fretboardScaleType} class={clsx(selectStyles)}>
			<option value="major"> Major </option>
			<option value="minor"> Minor </option>
		</select>
	</div>
</div>
