let cachData = 'appV1';

this.addEventListener('install', event => {
	event.waitUntil(
		cache.addAll({
			'/static/js/main.chunk.js',
			'/static/js/O.chunk.js',
			'/static/js/O.bundle.js',
			'/index.html',
			'/'
		})
		)
})