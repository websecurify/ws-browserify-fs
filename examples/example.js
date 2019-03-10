var fs = require('../lib/fs')

fs.mkdir('/home', function(err) {
	if (err) {
		console.error(err)

		return
	}

	fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function(err) {
		if (err) {
			console.error(err)

			return
		}

		fs.readFile('/home/hello-world.txt', 'utf-8', function(err, data) {
			if (err) {
				console.error(err)

				return
			}

			console.log(data)
		})
	})
})
