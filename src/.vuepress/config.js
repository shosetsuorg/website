module.exports = {
	title: "Shosetsu",
	description: "Free and open source novel reader for Android.",
	dest: "./public",
	themeConfig: {
		nav: require("./config/nav"),
		sidebar: [
			{
				title: "Home",
				path: "/"
			},
			{
				title: "Frequently Asked Questions",
				path: "/help/faq/"
			},
			{
				title: "Guides",
				children: [
					"/help/guides/getting-started",
					"/help/guides/creating-extensions",
					"/help/guides/repositories",
					"/help/guides/browse"
				]
			}
		],
		repo: "shosetsuorg/shosetsu",
		docsRepo: "shosetsuorg/website",
		docsDir: "src",
		logo: "/assets/media/logo.svg",
		editLinks: true,
		editLinkText: "Help us improve this page",
		lastUpdated: "Last Updated"
	},
	plugins: require("./config/plugins"),
	extraWatchFiles: [".vuepress/config/nav.js", ".vuepress/config/plugins.js"]
};
