<script lang="ts">
	import testImage from '$lib/assets/homepage/test.jpg?enhanced';
	import { ArticleCard, Link, Newsletter } from '$lib/components/homepage';
	import Icon from '@iconify/svelte';

	type Article = {
		id: number;
		title: string;
		tags: string[];
		category: string;
		thumbnail: string;
		postedOn: string | Date; // ISO 8601
	};

	const data: Article[] = [
		{
			id: 1,
			title:
				"High and dry:The global energy transition's looming impact on the LNG and oil shipbuilding industry",
			tags: ['Report', 'Public Finance', 'Private Finance'],
			category: 'Research',
			thumbnail: testImage,
			postedOn: '2024-03-05T11:46:43Z'
		},
		{
			id: 2,
			title: 'Global trends in climate change litigation 2022',
			tags: ['Gas', 'Hydrogen'],
			category: 'Research',
			postedOn: '2024-03-05T11:46:43Z',
			thumbnail: testImage
		},
		{
			id: 3,
			title: 'Offshore Wind Colloquium Brief No.1 - UK case of Fisheries Engagement',
			tags: [],
			category: 'Research',
			postedOn: '2024-03-05T11:46:43Z',
			thumbnail: testImage
		}
	];

	$: researchArticles = data.filter(({ category }) => category.toLowerCase() === 'research');
</script>

<!-- Research section -->
<section class="lg:flex lg:tracking-tighter lg:overflow-x-hidden">
	<!-- section title -->
	<h2 class="lg:basis-1/3 lg:pt-28 lg:p-36 lg:text-80pxr">Research</h2>
	<!-- right side of section -->
	<div class="lg:pt-54 lg:pr-36 lg:basis-2/3 lg:pb-220">
		<!-- title -->
		<h3 class="lg:text-42pxr lg:text-black-olive">New Research</h3>
		<!-- navigate button -->
		<Link
			class="lg:bg-anti-flash-white lg:rounded-10 lg:py-6 lg:pl-12 lg:pr-8 lg:flex lg:items-center lg:font-medium lg:mt-18 lg:mb-50 lg:w-fit"
		>
			See all Research
			<Icon icon="system-uicons:arrow-top-right" class="lg:w-22 lg:h-22 lg:ml-5" />
		</Link>
		<!-- swiper container -->
		<div class="lg:flex lg:gap-x-12">
			<!-- card -->
			{#each researchArticles as article}
				<ArticleCard {...article} />
			{/each}
		</div>
	</div>
</section>
<hr class="lg:mx-36 lg:h-1 lg:bg-neutral-400 lg:bg-opacity-30 lg:mb-100" />
<!-- Insights section -->

<!-- Who we are section -->

<!-- What we do section -->

<!-- Our People section -->

<!-- Newsletter section -->
<Newsletter />
