<script lang="ts">
	import * as m from '$paraglide/messages';
	import { languageTag } from '$paraglide/runtime';
</script>

<h1>{m.greeting()}</h1>
<p>{m.visit()}</p>
<a href="/about" hreflang={languageTag()}>{m.about_button()}</a>
