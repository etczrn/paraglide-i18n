const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			borderWidth: px0_10,
			lineHeight: px0_100,
			minWidth: px0_200,
			minHeight: px0_200,
			spacing: px0_200,
			colors: {
				'anti-flash-white': '#F0F1F4',
				'light-silver': '#D9D9D9',
				'philippine-silver': '#B5B5B7',
				'persian-blue': '#0A39C3',
				'violet-blue': '#3C41BE'
			}
		}
		// colors: {
		// 	blue: '#0A39C3'
		// }
	},
	plugins: []
};
