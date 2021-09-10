/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,

	async redirects() {
		return [
			{
				source: "/jeevangithub",
				destination: "https://github.com/JeevanRupacha",
				permanent: false,
				basePath: false,
			},
			{
				source: "/jeevantwitter",
				destination: "https://twitter.com/jivanrupacha",
				permanent: false,
				basePath: false,
			},
			{
				source: "/grishmingithub",
				destination: "https://github.com/karkigrishmin",
				permanent: false,
				basePath: false,
			},
			{
				source: "/grishmintwitter",
				destination: "https://twitter.com/KarkiGrishmin",
				permanent: false,
				basePath: false,
			},
		];
	},
};
