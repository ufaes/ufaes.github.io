<script lang="ts">
	import TextContainer from '$lib/components/TextContainer.svelte';
	// import '$lib/content-styles.css';
	// this $types module is generated based on the contents of the pageLoad params in +page.ts, so it stays typesafe
	// https://svelte.dev/docs/kit/load
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head
	><title>{data.metadata.title}</title><meta
		name="description"
		content={data.metadata.description}
	/>
</svelte:head>

<TextContainer>
	<h1 class="my-4 text-5xl font-bold">{data.metadata.title}</h1>
	<article class="prose prose-img:my-0 prose-img:rounded-lg prose-img:mx-auto prose-img:shadow-lg">
		<data.component></data.component>
	</article>
</TextContainer>
