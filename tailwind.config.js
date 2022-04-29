module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			red: '#ff4a44',
			'darker-red': '#ee312a',
			green: '#00a91f',
			'darker-green': '#008900',
			grey: 'rgb(32, 30, 30)',
			'lighter-grey': ' rgb(55, 52, 52)',
			purple: '#5d02c4',
			'lighter-purple': '#9847f5',
			'darker-purple': '#4f00a3',
			blue: '#0040ff',
			'darker-blue': '#0045f2',
			'lighter-blue': '#0084ff',
		},
		screens: {
			md: { max: '768px' },
		},
		extend: {
			borderRadius: {
				cl: '10px',
				cxl: '20px',
			},
			animation: {
				blip: 'blip 1s infinite linear',
				spin: 'spin 1s ease-in-out infinite',
			},
			keyframes: {
				blip: {
					'0%': {
						opacity: 1,
					},
					'50%': {
						opacity: 0,
					},
					'100%': {
						opacity: 1,
					},
				},
				spin: {
					to: {
						'-webkit-transform': 'rotate(360deg)',
					},
				},
			},
		},
	},
	plugins: [],
};
