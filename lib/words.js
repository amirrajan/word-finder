import { filter, each } from 'lodash';

export function search(word, dictionary) {
  const exclude = filter(word, w => {
    return w != '?' && w != '_';
  });

  let toSearch = '';
  let excludePattern = '';

  each(exclude, c => excludePattern += '^' + c);

  excludePattern = '[' + excludePattern + ']';

  toSearch = '^' + word.replace(/\?/g, excludePattern) + '$';

  toSearch = '^' + toSearch.replace(/\_/g, '[a-z]') + '$';

  if (word.indexOf('/') >= 0) {
    toSearch = word.replace(/\//g, '');
  }

  const result = filter(dictionary, w => {
    return w.match(new RegExp(toSearch, 'i'));
  });

  return {
    result,
    excludePattern,
    searchPattern: toSearch
  };
}
