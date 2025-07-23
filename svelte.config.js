import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({
		extensions: ['.md'],
		// For some reason relative paths don't work, so we use the absolute path here instead
		layout: { _: process.cwd() + '/src/lib/markdown-layouts/default.svelte' }
	})],
	kit: {
		adapter: adapter(),
		paths: {
			// leave empty so it serves directly from the root
			base: ''
		}
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
