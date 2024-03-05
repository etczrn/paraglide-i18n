<script lang="ts">
	import { melt, type MenubarBuilders } from '@melt-ui/svelte';
	import { Link } from '../common';
	import type { Menu } from './type';

	export let name = '';
	export let children: Menu[] = [];
	export let createMenu: MenubarBuilders['createMenu'];

	const {
		elements: { menu, item, trigger }
	} = createMenu();
</script>

<button use:melt={$trigger} class="mr-28">{name}</button>
<div use:melt={$menu} class="z-50 flex flex-col">
	{#each children as { name, href }}
		<Link {href}>
			<div
				use:melt={$item}
				class="mb-8 text-center rounded-md shadow-lg px-13 py-11 min-w-140 max-w-173 text-15pxr hover:bg-violet-blue hover:text-white"
			>
				{name}
			</div>
		</Link>
	{/each}
</div>
