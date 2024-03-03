<script lang="ts">
	import { createPopover, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	const {
		elements: { trigger, content },
		states: { open }
	} = createPopover();

	type Menu = {
		name: string;
		href?: string;
		children?: Menu[];
	};

	export let name = '';

	export let children: Menu[] = [];
</script>

<button class="mr-28" use:melt={$trigger}>{name}</button>
{#if open}
	<div
		use:melt={$content}
		transition:fade={{ duration: 100 }}
		class="z-50 min-w-140 rounded-[4px] bg-white p-5 flex flex-col"
	>
		{#each children as { name, href }}
			<a
				{href}
				class="mb-8 text-center rounded-md shadow-lg px-13 py-11 min-w-140 text-15pxr hover:bg-violet-blue hover:text-white"
				>{name}</a
			>
		{/each}
	</div>
{/if}
