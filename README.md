# ws-browserify-fs

[fs](http://nodejs.org/api/fs.html) for the browser using [BrowserFS](https://github.com/jvilk/BrowserFS).

	npm install ws-browserify-fs

## Usage

To use simply require it and use it as you would fs

``` js
var fs = require('browserify-fs');

fs.mkdir('/home', function() {
	fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function() {
		fs.readFile('/home/hello-world.txt', 'utf-8', function(err, data) {
			console.log(data);
		});
	});
});
```

You can also make browserify replace `require('fs')` with browserify-fs using

	browserify -r fs:ws-browserify-fs

Using the replacement you can browserify modules like [tar-fs](https://github.com/mafintosh/tar-fs) and [mkdirp](https://github.com/substack/node-mkdirp)!

## License

MIT
