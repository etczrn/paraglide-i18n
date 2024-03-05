<script lang="ts">
	import newsletter from '$lib/assets/homepage/newsletter.png?enhanced';
</script>

<section
	class="relative p-24 tracking-tighter text-white lg:p-36 lg:pt-30 bg-persian-blue lg:flex h-410"
>
	<div class="lg:w-1/2 lg:-mt-6 lg:relative">
		<h3 class="mb-20 text-24pxr lg:text-36pxr">SFOC Newsletter</h3>
		<enhanced:img
			src={newsletter}
			alt="geometric pattern for newsletter"
			class="absolute bottom-0 w-9/12 max-w-lg -translate-x-1/2 left-1/2 lg:max-w-none lg:transform-none lg:left-auto lg:right-[5%] lg:-bottom-36"
		/>
	</div>
	<div class="lg:w-1/2">
		<div class="flex gap-x-12 mb-28">
			<input
				type="email"
				placeholder="email"
				class="w-2/3 px-16 bg-transparent border-white rounded-10 placeholder:text-white placeholder:text-opacity-35 focus:border-white py-11 lg:px-20 lg:py-15 lg:text-24pxr lg:rounded-15"
			/>
			<button class="w-1/3 px-20 rounded-10 py-11 bg-chinese-black text-15pxr lg:text-20pxr"
				>subscribe</button
			>
		</div>
		<p class="leading-fit lg:text-24pxr lg:max-w-xl">
			Get updates on the SFOC latest insight, analysis, data and events delivered twice monthly.
		</p>
	</div>
</section>
