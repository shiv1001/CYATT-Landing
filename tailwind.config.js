module.exports = {
	content: ['./index.html', './src/**/*.{jsx, js}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				inter: ['Blinker','Azonix'],
			},
			variants: { extend: { display: ['dark'], } }
		},
	},
	plugins: [],
}



