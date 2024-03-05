<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n';
	import {
		availableLanguageTags,
		languageTag,
		type AvailableLanguageTag
	} from '$paraglide/runtime';
	import Icon from '@iconify/svelte';
	import {
		createAccordion,
		createDialog,
		createMenubar,
		createSelect,
		melt
	} from '@melt-ui/svelte';
	import type { MeltEventHandler } from '@melt-ui/svelte/internal/types';
	import { get } from 'svelte/store';
	import { fly, slide } from 'svelte/transition';
	import { Link } from '../common';
	import NavPopover from './Popover.svelte';
	import type { Menu } from './type';

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
		elements: { trigger: menuDrawerTrigger, content: menuDrawerContent },
		states: { open: menuDrawerOpen }
	} = createDialog({ closeOnOutsideClick: false });

	const {
		elements: {
			trigger: searchDrawerTrigger,
			content: searchDrawerContent,
			close: searchDrawerClose
		},
		states: { open: searchDrawerOpen }
	} = createDialog({ closeOnOutsideClick: false });

	const {
		elements: { root, item, trigger: accordionTrigger, content: accordionContent },
		helpers: { isSelected }
	} = createAccordion();

	const {
		elements: {
			trigger: languageSelectTrigger,
			menu: languageSelectMenu,
			option: languageSelectOption
		},
		states: { open: languageSelectOpen }
	} = createSelect({ positioning: { placement: 'top' } });

	const currentLang = languageTag();

	const labels: Record<AvailableLanguageTag, string> = {
		en: 'ENG',
		ko: 'KOR'
	};

	const handleMenuDrawerToggle: MeltEventHandler<MouseEvent> = (e) => {
		e.preventDefault();
		if (searchDrawerOpen.get()) {
			searchDrawerOpen.update(() => false);
		}
		menuDrawerOpen.update((prev) => !prev);
	};

	const handleSearchDrawerToggle: MeltEventHandler<MouseEvent> = (e) => {
		e.preventDefault();
		if (menuDrawerOpen.get()) {
			menuDrawerOpen.update(() => false);
		}
		searchDrawerOpen.update((prev) => !prev);
	};

	const handleLanguageChange = (e: Event) => {
		const { value } = e.target as HTMLButtonElement;
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, value as AvailableLanguageTag);
		goto(localisedPath);
	};
</script>

<nav
	use:melt={$menubar}
	class="fixed z-50 w-screen px-24 bg-white h-50 py-13 lg:h-74 lg:px-36 lg:py-21"
>
	<div class="flex items-center justify-between">
		<!-- Logo icon -->
		<Link href="/" class="w-24 aspect-square lg:w-32">
			<Icon icon="logos:svelte-icon" class="w-full h-full" />
		</Link>
		<div class="flex items-center gap-x-12 lg:gap-x-0">
			<!-- PC menu list -->
			<div class="items-center hidden h-full lg:flex text-17pxr">
				{#each menus as { name, href, children }}
					{#if href === 'feed'}
						<Link {href} class="px-8 py-5 mx-24 rounded-lg bg-anti-flash-white">{name}</Link>
					{:else if href}
						<Link {href}>{name}</Link>
					{:else}
						<NavPopover {name} {children} {createMenu} />
					{/if}
				{/each}
			</div>
			<!-- Search button with drawer -->
			<button
				class="w-24 h-24 lg:mr-24"
				use:melt={$searchDrawerTrigger}
				on:m-click={handleSearchDrawerToggle}
			>
				<Icon icon="mdi:magnify" class="w-full h-full" />
			</button>
			{#if $searchDrawerOpen}
				<div
					use:melt={$searchDrawerContent}
					class="fixed left-0 z-50 w-full p-24 bg-white shadow-xl top-50 h-98 rounded-b-10 focus:outline-none lg:top-74 lg:p-35 lg:pt-20 lg:pr-30 lg:h-260 lg:flex lg:flex-col"
					transition:slide={{ axis: 'y', duration: 400 }}
				>
					<div class="justify-between hidden mb-auto tracking-tighter lg:flex">
						<p class="font-medium text-54pxr">What are you looking for?</p>
						<button use:melt={$searchDrawerClose} class="w-60 h-60">
							<Icon icon="material-symbols:close" class="w-full h-full" />
						</button>
					</div>
					<div
						class="flex items-center w-full pl-16 pr-10 h-50 border-light-silver border-1 rounded-xl lg:max-w-screen-md lg:h-80 lg:ml-auto"
					>
						<input
							type="text"
							class="w-full h-full text-2xl border-none outline-none placeholder:text-philippine-silver focus:ring-offset-none"
							placeholder="Search"
						/>
						<button class="ml-10">
							<Icon icon="mdi:magnify" class="w-30 h-30" />
						</button>
					</div>
				</div>
			{/if}
			<!-- Vertical line -->
			<div class="hidden w-1 h-24 mr-24 bg-black lg:block" />
			<!-- Donation link -->
			<Link href="donation" class="hidden px-12 py-4 text-white rounded-lg bg-persian-blue lg:block"
				>Donate</Link
			>
			<!-- Hamburger button with menu drawer -->
			<button
				class="w-24 h-24 lg:hidden"
				use:melt={$menuDrawerTrigger}
				on:m-click={handleMenuDrawerToggle}
			>
				<Icon icon="mdi:hamburger-menu" class="w-full h-full" />
			</button>
			{#if $menuDrawerOpen}
				<div
					use:melt={$menuDrawerContent}
					class="fixed right-0 z-50 w-full h-[calc(100vh-50px)] pt-[calc(70px+50px)] pb-60 pl-77 bg-white top-50 focus:outline-none"
					transition:fly={{ x: '100%', duration: 500, opacity: 1 }}
				>
					<div class="relative w-full h-full">
						{#each menus as { name, href, children }}
							<div class="block font-medium tracking-tighter text-20pxr mb-28">
								{#if href}
									<Link {href}>{name}</Link>
								{:else}
									<div use:melt={$root}>
										<div use:melt={$item}>
											<button
												use:melt={$accordionTrigger(name)}
												class={`${$isSelected(name) ? 'text-violet-blue' : ''}`}
											>
												{name}
											</button>
											{#if $isSelected(name)}
												<hr class="mt-12 mb-10" />
												<div use:melt={$accordionContent(name)} transition:slide>
													{#each children || [] as { name, href }}
														<Link {href} class="block text-17pxr">{name}</Link>
														<hr class="my-10" />
													{/each}
												</div>
											{/if}
										</div>
									</div>
								{/if}
							</div>
						{/each}
						<!-- lnaguage and donation -->
						<div class="absolute bottom-0 font-medium tracking-tighter text-15pxr">
							<!-- lnaguage changer -->
							{#if $languageSelectOpen}
								<div use:melt={$languageSelectMenu} class="z-50 flex flex-col">
									{#each availableLanguageTags as lang}
										<button
											use:melt={$languageSelectOption}
											on:click={handleLanguageChange}
											class="mb-12 text-black"
											value={lang}
										>
											{labels[lang]}
										</button>
									{/each}
								</div>
							{/if}
							<button
								use:melt={$languageSelectTrigger}
								class={`${$languageSelectOpen ? 'text-violet-blue' : ''}`}
							>
								{labels[currentLang]}
							</button>
							<Link href="donation" class="px-12 py-6 ml-20 text-white rounded-lg bg-persian-blue">
								Donate
							</Link>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</nav>
