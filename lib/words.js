var _ = require('lodash');
var dict = require('./dictionary.js');

function search(word) {
  var exclude = _.filter(word, function(w) {
    return w != "?" && w != "_";
  });


  var excludePattern = "",
    toSearch = "";

  _.each(exclude, function(c) {
    excludePattern += "^" + c;
  });

  excludePattern = "[" + excludePattern + "]";

  toSearch = "^" + word.replace(/\?/g, excludePattern) + "$";

  toSearch = "^" + toSearch.replace(/\_/g, "[a-z]") + "$";

  if(word.indexOf("/") >= 0) {
    toSearch = word.replace(/\//g, "");
  }

  var result = _.filter(dict.dictionary, function(w) {
    return w.match(new RegExp(toSearch, "i"));
  });

  return {
    result: result,
    excludePattern: excludePattern,
    searchPattern: toSearch
  };
}

exports.search = search;
