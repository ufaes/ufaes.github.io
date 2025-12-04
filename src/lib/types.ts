import type { Component } from 'svelte';

export type ContentMetadata = {
	title: string;
	description: string;
    date?: Date;
};

export type ContentModules = Record<
	string,
	() => Promise<{ default: Component; metadata: ContentMetadata }>
>;