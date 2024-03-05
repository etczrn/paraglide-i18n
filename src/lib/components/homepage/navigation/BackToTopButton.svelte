<script lang="ts">
	import { browser } from '$app/environment';
	import Icon from '@iconify/svelte';

	const handleScrollToTop = () => {
		if (!browser) {
			return;
		}
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<button class="fixed hidden bottom-30 right-20 lg:block" on:click={handleScrollToTop}>
	<Icon icon="mdi:arrow-up-circle" class="w-80 h-80" style="color: #B5B5B777" />
</button>
