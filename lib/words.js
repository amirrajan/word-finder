import { filter, each } from 'underscore';
var dict = require('./dictionary.js');

function search(word) {
  var exclude = filter(word, function(w) {
    return w != "?" && w != "_";
  });

  var excludePattern = "",
    toSearch = "";

  each(exclude, function(c) {
    excludePattern += "^" + c;
  });

  excludePattern = "[" + excludePattern + "]";

  toSearch = "^" + word.replace(/\?/g, excludePattern) + "$";

  toSearch = "^" + toSearch.replace(/\_/g, "[a-z]") + "$";

  if(word.indexOf("/") >= 0) {
    toSearch = word.replace(/\//g, "");
  }

  var result = filter(dict.dictionary, function(w) {
    return w.match(new RegExp(toSearch, "i"));
  });

  return {
    result: result,
    excludePattern: excludePattern,
    searchPattern: toSearch
  };
}

exports.search = search;
