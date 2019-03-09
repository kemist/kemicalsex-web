import assert from 'assert';
import cheerio from 'cheerio';

import HTML from './fixtures/html';

import { normalizeSpaces } from './index';

describe('normalizeSpaces(text)', () => {
  it('normalizes spaces from text', () => {
    const $ = cheerio.load(HTML.normalizeSpaces.before);

    const result = normalizeSpaces(
      $('*')
        .first()
        .text()
    );
    assert.equal(result, HTML.normalizeSpaces.after);
  });
});
