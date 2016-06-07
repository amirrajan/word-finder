import { search } from '../lib/words';
import { each }	from 'underscore';
import assert from 'assert';
import fs from 'fs';

const dictionary = JSON.parse(
  fs.readFileSync('./lib/dictionary.json')
).dictionary;

describe('matching underscore', () => {
  it('matches _h', () => {
    const find = '_h';
    const result = search(find, dictionary).result;

    assert.equal(result.length, 7);

    each(result, (match) => {
      assert.equal(match.length, 2);
      assert.equal(match.indexOf('H'), 1);
    }, result);
  });

  it('matches h_', () => {
    const find = 'h_';
    const result = search(find, dictionary).result;

    each(result, (match) => {
      assert.equal(match.length, 2);
      assert.equal(match.indexOf('H'), 0);
    }, result);
  });
});
