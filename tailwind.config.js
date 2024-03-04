const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_300 = { ...Array.from(Array(301)).map((_, i) => `${i}px`) };

const pxToRem = (px, base = 16) => `${px / base}rem`;

const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

const fontSize = {
	...range(1, 100).reduce((acc, px) => {
		acc[`${px}pxr`] = pxToRem(px);
		return acc;
	}, {})
};

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	plugins: [require('flowbite/plugin')],
	darkMode: 'class',
	theme: {
		extend: {
			borderWidth: px0_10,
			lineHeight: px0_100,
			minWidth: px0_200,
			minHeight: px0_200,
			spacing: px0_300,
			colors: {
				'anti-flash-white': '#F4F3F0',
				'light-silver': '#D9D9D9',
				'philippine-silver': '#B5B5B7',
				'persian-blue': '#0A39C3',
				'violet-blue': '#3C41BE'
			},
			fontSize
		}
	}
};
