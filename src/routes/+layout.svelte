<script lang="ts">
	import MeltNavbar from '$lib/components/MeltNavbar.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import '../app.css';
</script>

<ParaglideJS {i18n}>
	<MeltNavbar />
	<main>
		<slot />
	</main>
</ParaglideJS>
