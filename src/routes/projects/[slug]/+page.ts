import type { LoadEvent } from '@sveltejs/kit';

interface MarkdownModule {
	metadata: {
		title: string;
		date?: string;
	};
	default: typeof import('*.svelte').default;
}

export async function load({ params }: LoadEvent<{ slug: string }>) {
	const post = (await import(`../${params.slug}.md`)) as MarkdownModule;
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}
