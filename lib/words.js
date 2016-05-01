import filter from 'lodash';
var _ = require('lodash');
var path = require('path');
var dict = require('./dictionary.js');

export function search(word) {
  var exclude = _.filter(word, function(w) {
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

  var result = filter(dict.dictionary, w => {
    return w.match(new RegExp(toSearch, "i"));
  });

  return {
    result,
    excludePattern,
    searchPattern: toSearch
  };
}
exports.search = search;
