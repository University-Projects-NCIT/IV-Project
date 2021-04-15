const { readBuilderProgram } = require("typescript");

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				// mycolor : '#FFFFFF',
				// primary: {
				//   light: '#283A45',
				//   default: '#283A45'
				// }
				item_list_bg: "#283A45",
				drak_blue_background: "#1E272D",
				blue_secondary: "#111E6C",

				// Color used in button to filter
				// newest or must popular product.
				color4: "#311A8E",

				// Blue green upcomming prouduct item
				// background color .
				color5: "#083C82",

				//Orange color for button
				// motivation color
				color6: "#F39912",

				// upvote button color red type
				color7: "#EB5757",

				buttonGreen: "#238636",
			},
			
			screens: {
        'xs': '400px'
      }

		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
