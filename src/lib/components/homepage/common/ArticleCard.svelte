<script lang="ts">
	import { Link } from '$lib/components/homepage';

	export let id: number | string;
	export let title: string;
	export let tags: string[];
	export let category: string;
	export let thumbnail: string;
	export let postedOn: string | Date;

	const date = new Date(postedOn);
	const formattedPostedOn = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
</script>

<Link href={`/research/${id}`} class="inline-block">
	<article class="lg:w-360">
		<!-- image with tag -->
		<div class="lg:relative">
			<enhanced:img
				src={thumbnail}
				alt={title}
				class="lg:aspect-video lg:object-cover lg:rounded-15"
			/>
			<span
				class="lg:tracking-normal lg:font-medium lg:text-white lg:rounded-md lg:bg-anti-flash-white lg:bg-opacity-20 lg:px-10 lg:py-6 lg:absolute lg:left-20 lg:top-20 lg:backdrop-blur-xl"
				>{category}
			</span>
		</div>
		<!-- tags -->
		<ul class="lg:flex lg:gap-x-8 lg:my-14 lg:overflow-x-auto">
			{#each tags as tag}
				<li
					class="lg:bg-persian-blue lg:text-white lg:text-13pxr lg:font-medium lg:p-6 lg:pt-3 lg:pb-4 lg:rounded-md lg:inline-block lg:min-w-max"
				>
					{tag}
				</li>
			{/each}
		</ul>
		<!-- title -->
		<p class="lg:text-24pxr lg:leading-fit lg:font-medium lg:pr-16 lg:mb-35">
			{title}
		</p>
		<span class="lg:text-15pxr lg:text-black/30">{formattedPostedOn}</span>
	</article>
</Link>
