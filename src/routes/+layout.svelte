<script lang="ts">
	import { i18n } from '$lib/i18n';
	import '@fontsource-variable/inter';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import '../app.css';
</script>

<ParaglideJS {i18n}>
	<main>
		<slot />
	</main>
</ParaglideJS>

<style>
	:global(body) {
		font-family: 'Inter Variable', sans-serif;
	}
</style>
