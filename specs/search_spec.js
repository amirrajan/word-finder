//# spec - words.search

var words = require('../lib/words'),
		_ = require('underscore');

describe('when Barry enters a file path', function(){
	it('eventuall works!!!', function(){
		expect(true).toBe(true);
	});
});

describe('matching underscore', function(){
	
	it('matches _h', function(){
		var find = '_h',
		result = words.search(find);

		expect(result.length).toBe(7);
		console.log('matches:');

		_.each(result, function(match){
			console.log('[' + match + ']');
			expect(match.length).toBe(2);
			expect(match.indexOf('H')).toBe(1);
		}, result);

		console.log(result);
	});

	it('matches h_', function(){
		var find = 'h_',
			result = words.search(find);

		console.log('matches ========>');

		_.each(result, function(match){
			console.log('[' + match + ']');
			expect(match.length).toBe(2);
			expect(match.indexOf('H')).toBe(0);
		}, result);

		console.log(result);
	});
});