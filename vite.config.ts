import { paraglide } from '@inlang/paraglide-js-adapter-sveltekit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		paraglide({
			project: './project.inlang',
			outdir: './src/paraglide'
		}),
		enhancedImages(),
		sveltekit()
	]
});
