<script lang="ts">
	import { fretboardKey, fretboardScaleType } from '../stores/fretboard';
	import { notes } from '../theory';
</script>

<div class="flex gap-10">
	<div class="space-y-1">
		<h1 class="text-[32px]">Key</h1>
		<select
			bind:value={$fretboardKey}
			class="shadow-none text-[21px] p-0 py-3 text-orange-400 font-bold bg-transparent border-0 w-[130px]"
		>
			{#each notes as note}
				<option value={note}> {note} </option>
			{/each}
		</select>
	</div>

	<div class="space-y-1">
		<h1 class="text-[32px]">Scale</h1>
		<select
			bind:value={$fretboardScaleType}
			class="shadow-none text-[21px] p-0 py-3 text-orange-400 font-bold bg-transparent border-0 w-[130px]"
		>
			<option value="major"> Major </option>
			<option value="minor"> Minor </option>
		</select>
	</div>
</div>
