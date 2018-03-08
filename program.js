process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case 'version':
				console.log('node: ' + process.versions.node);
				console.log('LANG: ' + process.env.LANG);
				console.log('USER: ' + process.env.USER);
				break;
			default:
				process.stderr.write('Command not recognized');
		}
	}
});