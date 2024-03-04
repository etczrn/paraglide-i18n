<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import '../app.css';
</script>

<ParaglideJS {i18n}>
	<NavigationBar />
	<NavBar />
	<main>
		<slot />
	</main>
</ParaglideJS>
