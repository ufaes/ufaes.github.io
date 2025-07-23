<script>
	import { page } from '$app/state';
</script>

<div class="bg-base-200 flex min-h-screen flex-col items-center justify-center">
	<div class="card bg-base-100 w-full max-w-md p-8 shadow-xl">
		<h1 class="text-primary mb-4 text-7xl font-extrabold">{page.status}</h1>
		<h2 class="mb-2 text-2xl font-semibold">
			{page.status === 404 ? 'Page Not Found' : 'Something went wrong'}
		</h2>
		<p class="text-base-content/70 mb-6">
			{page.status === 404
				? "Whoops! That page doesn't exist."
				: page.error?.message || 'An unexpected error has occurred.'}
		</p>
		<a href="/" class="btn btn-primary w-full">Go Home</a>
	</div>
</div>
