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

<section>
	<h1 class="title">Research</h1>
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
<a href="tailwind">same component</a>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-areas:
			'title'
			'articles';
		gap: 2rem;
		padding-inline: 1.5rem;
	}

	.title {
		grid-area: title;
		/* TODO: font size 어떻게 하지... */
		font-size: clamp(2rem, 10vw + 1rem, 3.125rem);
	}

	.articles {
		grid-area: articles;
		position: relative;
		display: grid;
		grid-template-areas:
			'sub-title button-group'
			'link .'
			'carousel .';
	}

	.articles h2 {
		letter-spacing: -0.05rem;
		font-size: clamp(1rem, 5vw + 1rem, 1.75rem);
		grid-area: sub-title;
	}

	.articles a {
		background-color: #f4f3f0;
		padding: 0.375em 0.5em;
		grid-area: link;
		grid-column: 1/-1;
	}

	.articles .button-group {
		display: inline-flex;
		grid-area: button-group;
	}

	article {
		padding: 1rem;
		background-color: #f4f3f0;
		border-radius: 0.5rem;
		border-color: blueviolet;
		border-width: 1px;
		border-style: solid;
	}

	.embla {
		overflow: hidden;
		grid-area: carousel;
		grid-column: 1/-1;
	}
	.embla-container {
		display: flex;
	}
	.embla-slide {
		flex: 0 0 100%;
		flex-basis: 100%;
		min-width: 0;
	}

	@media (min-width: 48rem) {
		section {
			grid-template-columns: 3.5fr 6.5fr;
			grid-template-areas: 'title articles';
		}

		.title {
			font-size: clamp(3.125rem, 5vw + 1rem, 5rem);
		}

		.embla-slide {
			flex: 0 0 100%;
		}
	}
</style>
