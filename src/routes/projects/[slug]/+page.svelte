<script lang="ts">
	// this $types module is generated based on the contents of the pageLoad params in +page.ts, so it stays typesafe
	// https://svelte.dev/docs/kit/load
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
