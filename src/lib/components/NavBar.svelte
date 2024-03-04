<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import PcLogo from '$lib/components/LogoPc.svelte';
	import { Menubar } from 'bits-ui';

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
</script>

<Menubar.Root class="fixed z-50 w-screen px-24 bg-white h-50 py-13 lg:h-74 lg:px-36 lg:py-21">
	<div class="flex items-center justify-between">
		<Link href="/">
			<Logo class="lg:hidden" />
			<PcLogo class="hidden lg:inline-block" />
		</Link>
		<!-- pc menu list -->
		<div class="items-center hidden h-full lg:flex text-17pxr">
			{#each menus as { name, href, children }}
				{#if href}
					<Link {href} class="mr-28">{name}</Link>
				{:else}
					<Menubar.Menu>
						<Menubar.Trigger class="mr-28">
							{name}
						</Menubar.Trigger>
						<Menubar.Content class="z-50" align="center">
							{#each children ?? [] as { name, href }}
								<Menubar.Item
									class="mb-8 text-center rounded-md shadow-lg px-13 py-11 min-w-140 text-15pxr hover:bg-violet-blue hover:text-white"
								>
									<Link {href}>{name}</Link>
								</Menubar.Item>
							{/each}
						</Menubar.Content>
					</Menubar.Menu>
				{/if}
			{/each}
		</div>
	</div>
</Menubar.Root>
