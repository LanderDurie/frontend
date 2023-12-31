import adapter from '@sveltejs/adapter-static' // This was changed from adapter-auto
import { vitePreprocess } from '@sveltejs/kit/vite'
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			sass: true,
		})
	],

	extensions: [".svelte", ".md", ".svx"],

	kit: {
		adapter: adapter(),
	},
}

export default config
