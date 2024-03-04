<script lang="ts">
	import type { Menu } from '$lib/types/menu';
	import Icon from '@iconify/svelte';
	import { createDialog, createMenubar, melt } from '@melt-ui/svelte';
	import type { MeltEventHandler } from '@melt-ui/svelte/internal/types';

	import { fly } from 'svelte/transition';
	import Link from './Link.svelte';
	import MeltNavPopover from './MeltNavPopover.svelte';

	const menus: Menu[] = [
		{
			name: 'ABOUT',
			children: [
				{ name: 'What we do', href: 'what-we-do' },
				{ name: 'Who we are', href: 'who-we-are' },
				{ name: 'People', href: 'people' },
				{
					name: 'Annual Financial Reports',
					href: 'annual-financial-reports'
				}
			]
		},
		{
			name: 'INSIGHTS',
			children: [
				{ name: 'Research', href: 'research' },
				{ name: 'Insights', href: 'insights' }
			]
		},
		{
			name: 'LATEST',
			children: [
				{ name: 'Newsroom', href: 'newsroom' },
				{ name: 'Events', href: 'events' }
			]
		},
		{ name: 'JOIN US', href: 'join-us' },
		{ name: 'FEED', href: 'feed' }
	];

	const {
		elements: { menubar },
		builders: { createMenu }
	} = createMenubar();

	const {
		elements: { trigger, content },
		states: { open }
	} = createDialog({ closeOnOutsideClick: false });

	const handleToggle: MeltEventHandler<MouseEvent> = (e) => {
		e.preventDefault();
		open.update((open) => !open);
	};
</script>

<nav
	use:melt={$menubar}
	class="fixed z-50 w-screen px-24 bg-white h-50 py-13 lg:h-74 lg:px-36 lg:py-21"
>
	<div class="flex items-center justify-between">
		<Link href="/" class="w-24 aspect-square lg:w-32">
			<Icon icon="logos:svelte-icon" class="w-full h-full" />
		</Link>
		<div class="flex items-center gap-x-12 lg:gap-x-0">
			<div class="items-center hidden h-full lg:flex text-17pxr">
				{#each menus as { name, href, children }}
					{#if href === 'feed'}
						<Link {href} class="px-8 py-5 mx-24 rounded-lg bg-anti-flash-white">{name}</Link>
					{:else if href}
						<Link {href}>{name}</Link>
					{:else}
						<MeltNavPopover {name} {children} {createMenu} />
					{/if}
				{/each}
			</div>
			<button class="w-24 h-24 lg:mr-24">
				<Icon icon="mdi:magnify" class="w-full h-full" />
			</button>
			<div class="hidden w-1 h-24 mr-24 bg-black lg:block" />
			<Link href="donation" class="hidden px-12 py-4 text-white rounded-lg bg-persian-blue lg:block"
				>Donate</Link
			>
			<button class="w-24 h-24 lg:hidden" use:melt={$trigger} on:m-click={handleToggle}>
				<Icon icon="mdi:hamburger-menu" class="w-full h-full" />
			</button>
			{#if $open}
				<div
					use:melt={$content}
					class="fixed right-0 z-50 w-full h-full pt-[calc(70px+50px)] pb-60 pl-77 bg-white top-50 focus:outline-none"
					transition:fly={{ x: '100%', duration: 800, opacity: 1 }}
				>
					something here
				</div>
			{/if}
		</div>
	</div>
</nav>
