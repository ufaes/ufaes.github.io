<script>
	// instructions from here:
	//https://github.com/pngwn/MDsveX/issues/595#issuecomment-2516087572
	let { children } = $props();

	import TextContainer from '$lib/components/TextContainer.svelte';
</script>

<TextContainer>
	{@render children()}
</TextContainer>
