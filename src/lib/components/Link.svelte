<script lang="ts">
	import { languageTag } from '$paraglide/runtime';

	const hreflang = languageTag();
	let className: Element['className'] = '';

	export let href: HTMLAnchorElement['href'] = '';
	export { className as class };
	export let tabindex: HTMLAnchorElement['tabIndex'] = 0;
</script>

<a {href} {hreflang} class={className} {tabindex}><slot /></a>
