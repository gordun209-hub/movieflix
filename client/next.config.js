module.exports = {
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true
	},
	images: {
		domains: ['dummyimage.com', 'imdb-api.com', 'm.media-amazon.com']
	}
}
