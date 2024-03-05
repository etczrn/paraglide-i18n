<script lang="ts">
	import Icon from '@iconify/svelte';
	import Link from './common/Link.svelte';

	const socials = [
		{ name: 'linkedin', href: 'https://www.linkedin.com/company/solutions-for-our-climate' },
		{ name: 'twitter-square', href: 'https://www.linkedin.com/company/solutions-for-our-climate' },
		{ name: 'youtube-square', href: 'https://www.linkedin.com/company/solutions-for-our-climate' }
	];

	const details = [
		{
			// title: 'Basic information',
			items: [
				{ label: 'Managing Director', value: 'Joojin Kim' },
				{ label: 'Registration No.', value: '561-82900137' },
				{
					label: 'Address',
					value:
						'505 5th Fl., HEYGROUND, 5 Ttuksseom-ro 1na-gil, Sungdong-gu, Seoul, Republic of Korea (04779)'
				}
			]
		},
		{
			// title: 'Contact information',
			items: [
				{ label: 'TEL', value: '02-6013-0137' },
				{ label: 'E-MAIL', value: 'solutions@forourclimate.org' }
			]
		}
	];

	const links = [
		{ name: 'Privacy Policy', href: 'privacy' },
		{ name: 'Ministry of Evnironment', href: 'ministry' },
		{ name: 'National Tax Service', href: 'ntis' }
	];
</script>

<footer
	class="w-full p-24 font-medium tracking-tighter pt-26 pb-30 bg-anti-flash-white text-10pxr lg:px-36 lg:py-30 lg:relative lg:h-full lg:text-15pxr"
>
	<!-- name and social links -->
	<div
		class="flex items-start justify-between mb-74 lg:mb-0 lg:absolute lg:w-[calc(100%-36px-36px)]"
	>
		<p class="text-15pxr lg:text-24pxr">Solutions for Our Climate</p>
		<div class="flex gap-x-12">
			{#each socials as { name, href }}
				<Link {href}>
					<Icon icon={`fa-brands:${name}`} class="w-30 h-30 lg:w-36 lg:h-36" />
				</Link>
			{/each}
		</div>
	</div>
	<!-- detail -->
	{#each details as { items }}
		<div class="flex flex-col gap-y-10 lg:ml-370 lg:gap-y-12 lg:mt-6 lg:max-w-2xl">
			{#each items as { label, value }}
				<div class="flex gap-x-8">
					<p class="w-5/12">{label}</p>
					<p class="w-7/12">{value}</p>
				</div>
			{/each}
		</div>
		<hr class="h-1 my-20 border-t-0 bg-neutral-400 bg-opacity-30 lg:my-24" />
	{/each}
	<!-- ohter links and copyright -->
	<div class="flex flex-col justify-between lg:flex-row lg:ml-370 lg:gap-x-12">
		<div class="flex items-center h-full mb-10">
			{#each links as { name, href }, i}
				<Link {href}>{name}</Link>
				{#if i < links.length - 1}
					<hr class="w-1 h-10 mx-14 bg-neutral-400 bg-opacity-30 lg:h-20" />
				{/if}
			{/each}
		</div>
		<p>Copyright © SFOC. All Rights Reserved.</p>
	</div>
</footer>
