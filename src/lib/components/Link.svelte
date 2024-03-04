<script lang="ts">
	import { languageTag } from '$paraglide/runtime';

	const hreflang = languageTag();
	let className: Element['className'] = '';

	export let href: HTMLAnchorElement['href'] = '';
	export { className as class };
</script>

<a {href} {hreflang} class={className}><slot /></a>
