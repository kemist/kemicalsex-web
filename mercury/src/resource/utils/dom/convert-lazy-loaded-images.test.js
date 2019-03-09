import assert from 'assert';
import cheerio from 'cheerio';

import convertLazyLoadedImages from './convert-lazy-loaded-images';

describe('convertLazyLoadedImages($)', () => {
  it('moves image links to src if placed in another attribute', () => {
    const html = '<img data-src="http://example.com/foo.jpg">';
    const $ = cheerio.load(html);

    const result = convertLazyLoadedImages($).html();

    assert.equal(
      result,
      '<img data-src="http://example.com/foo.jpg" src="http://example.com/foo.jpg">'
    );
  });

  it('does nothing when value is not a link', () => {
    // This is far from perfect, since a relative url could
    // be perfectly correct.
    const html = '<img data-src="foo.jpg">';
    const $ = cheerio.load(html);

    const result = convertLazyLoadedImages($).html();

    assert.equal(result, '<img data-src="foo.jpg">');
  });

  it('does nothing when value is not an image', () => {
    const html = '<img data-src="http://example.com">';
    const $ = cheerio.load(html);

    const result = convertLazyLoadedImages($).html();

    assert.equal(result, '<img data-src="http://example.com">');
  });

  it('does not change a correct img with src', () => {
    const html = '<img src="http://example.com/foo.jpg">';
    const $ = cheerio.load(html);

    const result = convertLazyLoadedImages($).html();

    assert.equal(result, '<img src="http://example.com/foo.jpg">');
  });
});
