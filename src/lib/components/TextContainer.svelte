<script lang="ts">
	let { children } = $props();
</script>

<div class="prose min-h-screen m-auto my-5">
	{@render children()}
</div>