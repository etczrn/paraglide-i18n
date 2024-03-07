<script lang="ts">
	import type { EmblaCarouselType } from 'embla-carousel';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	const { research } = data;

	let emblaApi: EmblaCarouselType;

	function handleInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
	}

	function handlePrev() {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
	}

	function handleNext() {
		if (!emblaApi) return;
		emblaApi.scrollNext();
	}
</script>

<section class="grid grid-cols-1 gap-8 px-6 md:grid-cols-[1fr_2fr]">
	<h1 class="">Research</h1>
	<div class="articles">
		<h2>New Research</h2>
		<a href="research">See all Research</a>
		<!-- carousel buttons -->
		<div class="button-group">
			<button on:click={handlePrev}>&#60;</button>
			<button on:click={handleNext}>&#62;</button>
		</div>
		<!-- carousel items -->
		<div class="embla" use:emblaCarouselSvelte on:emblaInit={handleInit}>
			<div class="embla-container">
				{#each research as { title, tags, postedOn, description }}
					<div class="embla-slide">
						<article>
							<h1>{title}</h1>
							<ul>
								{#each tags as tag}
									<li>{tag}</li>
								{/each}
							</ul>
							{#if description}
								<p>{description}</p>
							{/if}
							<span>{postedOn}</span>
						</article>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
<a href="/">home</a>
