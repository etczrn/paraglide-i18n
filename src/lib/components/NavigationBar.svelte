<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Logo from '$lib/components/Logo.svelte';
	import PcLogo from '$lib/components/LogoPc.svelte';
	import NavPopover from '$lib/components/NavPopover.svelte';
	import { i18n } from '$lib/i18n';
	import {
		availableLanguageTags,
		languageTag,
		type AvailableLanguageTag
	} from '$paraglide/runtime';
	import Icon from '@iconify/svelte';
	import { createPopover, melt } from '@melt-ui/svelte';
	import { get } from 'svelte/store';
	import { fade, fly, slide } from 'svelte/transition';
	import Link from './Link.svelte';

	const labels: Record<AvailableLanguageTag, string> = {
		en: 'ENG',
		ko: 'KOR'
	};

	const currentLang = languageTag();

	type Menu = {
		name: string;
		href?: string;
		children?: Menu[];
	};

	const menus: Menu[] = [
		{
			name: 'ABOUT',
			children: [
				{ name: 'What we do', href: 'what-we-do' },
				{ name: 'Who we are', href: 'who-we-are' },
				{ name: 'People', href: 'people' },
				{ name: 'Annual Financial Reports', href: 'annual-financial-reports' }
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
		{ name: 'JOIN US', href: 'join-us' }
	];

	const {
		elements: { trigger, content },
		states: { open }
	} = createPopover();

	let isSearchOpen = false;
	let isMenuOpen = false;
	let selected = '';
	let isLanguageOpen = false;

	const handleSearchToggle = () => {
		isSearchOpen = !isSearchOpen;
	};

	const handleMenuToggle = () => {
		isMenuOpen = !isMenuOpen;
	};

	const handleSelectedChange = (menu: string) => {
		selected = menu;
	};

	const handleLanguageToggle = () => {
		isLanguageOpen = !isLanguageOpen;
	};

	const handleLanguageChange = (e: Event) => {
		const { value } = e.target as HTMLButtonElement;
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, value as AvailableLanguageTag);
		goto(localisedPath);
	};

	// TODO: isMenuOpen -> prevent window scroll
</script>

<nav class="fixed z-50 w-screen px-24 bg-white h-50 py-13 lg:h-74 lg:px-36 lg:py-21">
	<div class="flex items-center justify-between">
		<a href="/" hreflang={currentLang} class="inline-block">
			<Logo class="lg:hidden" />
			<PcLogo class="hidden lg:inline-block" />
		</a>
		<div class="items-center hidden h-full lg:flex text-17pxr">
			{#each menus as { name, href, children }}
				{#if href}
					<Link {href}>{name}</Link>
				{:else}
					<NavPopover {name} {children} />
				{/if}
			{/each}
			<a href="feed" hreflang={currentLang} class="px-8 py-5 mx-24 rounded-lg bg-anti-flash-white"
				>SFOC FEED</a
			>
			<button class="w-24 h-24" on:click={handleSearchToggle}>
				<Icon icon="mdi:magnify" class="w-full h-full" />
			</button>
			<div class="w-1 h-24 mx-24 bg-black" />
			<button class="mr-20" use:melt={$trigger}>{labels[currentLang]}</button>
			{#if open}
				<div
					use:melt={$content}
					transition:fade={{ duration: 100 }}
					class="z-50 w-60 rounded-[4px] bg-white p-5 shadow-sm"
				>
					{#each availableLanguageTags as langTag}
						<button
							class="mb-8 rounded-md shadow-lg px-13 py-11 min-w-140 text-15pxr hover:bg-violet-blue hover:text-white"
							value={langTag}
							on:click={handleLanguageChange}>{labels[langTag]}</button
						>
					{/each}
				</div>
			{/if}
			<a
				href="/donation"
				hreflang={currentLang}
				class="py-5 text-white rounded-lg bg-persian-blue px-17">Donate</a
			>
		</div>
		<!-- TODO: make it responsive -->
		<div class="flex h-full gap-x-12 lg:hidden">
			<button class="w-24 h-24" on:click={handleSearchToggle}>
				<Icon icon="mdi:magnify" class="w-full h-full" />
			</button>
			<button class="w-24 h-24" on:click={handleMenuToggle}>
				<Icon icon="mdi:hamburger-menu" class="w-full h-full" />
			</button>
		</div>
	</div>
</nav>

{#if isSearchOpen}
	<div
		transition:slide
		class="absolute w-full p-24 bg-white shadow-2xl pt-[calc(50px+24px)] rounded-b-xl"
	>
		<div class="flex items-center w-full pl-16 pr-10 h-50 border-light-silver border-1 rounded-xl">
			<input
				type="text"
				class="w-full h-full text-2xl outline-none placeholder:text-philippine-silver"
				placeholder="Search"
			/>
			<button class="ml-10">
				<Icon icon="mdi:magnify" class="w-30 h-30" />
			</button>
		</div>
	</div>
{/if}

{#if isMenuOpen}
	<div
		transition:fly={{ duration: 800, x: '100%', opacity: 0.5 }}
		class="absolute w-screen h-screen bg-white pt-[calc(70px+50px)] pb-60 pl-77"
	>
		<div class="text-xl font-medium h-[calc(100%-54px)] overflow-auto">
			{#each menus as { name, href, children }}
				{#if href}
					<div class="tracking-tighter pb-28">
						<a
							{href}
							hreflang={currentLang}
							on:click={() => handleSelectedChange(name)}
							class={`${selected === name ? 'text-violet-blue' : ''}`}>{name}</a
						>
					</div>
				{:else}
					<div class="tracking-tighter pb-28">
						<button
							on:click={() => handleSelectedChange(name)}
							class={`${selected === name ? 'text-violet-blue' : ''}`}
						>
							{name}
						</button>
						{#if selected === name && children}
							<div transition:slide>
								<hr class="mt-12 mb-10" />
								{#each children as { name, href }}
									<a
										{href}
										hreflang={currentLang}
										class={`block text-lg ${selected === name ? 'text-violet-blue' : ''}}`}
									>
										{name}
									</a>
									<hr class="mt-12 mb-10" />
								{/each}
							</div>
						{/if}
					</div>
				{/if}
			{/each}
			<div class="tracking-tighter pb-28">
				<a href="/feed" hreflang={currentLang} class="px-8 py-6 rounded-lg bg-anti-flash-white"
					>SFOC FEED</a
				>
			</div>
		</div>
		<div class="absolute flex bottom-60 gap-x-20">
			<button
				class={`font-semibold ${isLanguageOpen ? 'text-violet-blue' : ''}`}
				on:click={handleLanguageToggle}
			>
				{labels[currentLang]}
			</button>
			<a
				href="/donation"
				hreflang={currentLang}
				class="px-12 py-6 text-white rounded-lg bg-violet-blue">DONATE</a
			>
		</div>
		{#if isLanguageOpen}
			<div class="absolute inline-flex flex-col bottom-90">
				{#each availableLanguageTags as langTag}
					<button class="mb-12" value={langTag} on:click={handleLanguageChange}
						>{labels[langTag]}</button
					>
				{/each}
			</div>
		{/if}
	</div>
{/if}
