var words = require('../lib/words');
var	_ = require('underscore');
var assert = require('assert');
var dictionary = JSON.parse(
  require('fs').readFileSync('./lib/dictionary.json')
).dictionary;

describe('matching underscore', function(){
	it('matches _h', function(){
		var find = '_h';
		var result = words.search(find, dictionary).result;

		assert.equal(result.length, 7);

		_.each(result, function(match){
			assert.equal(match.length, 2);
			assert.equal(match.indexOf('H'), 1);
		}, result);
	});

	it('matches h_', function(){
		var find = 'h_';
    var	result = words.search(find, dictionary).result;

		_.each(result, function(match){
			assert.equal(match.length, 2);
			assert.equal(match.indexOf('H'), 0);
		}, result);
	});
});
