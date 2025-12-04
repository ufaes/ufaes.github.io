<script lang="ts">
	import type { Component } from 'svelte';

	interface PageData {
		content: Component;
		title: string;
		date?: string;
	}

	let { data }: { data: PageData } = $props();
	const Content = data.content;
</script>

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<Content />
</article>