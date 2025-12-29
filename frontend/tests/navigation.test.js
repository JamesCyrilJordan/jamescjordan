import assert from 'node:assert';
import { navigation } from '../src/data/portfolio.js';

describe('navigation config', () => {
  it('contains required destinations', () => {
    const labels = navigation.map((item) => item.label);
    ['Home', 'Experience', 'Portfolio', 'Contact'].forEach((label) => {
      assert(labels.includes(label), `Expected nav to include ${label}`);
    });
  });

  it('uses slash-prefixed paths for routing compatibility', () => {
    navigation.forEach((item) => {
      assert(item.path.startsWith('/'), `Path ${item.path} should start with /`);
    });
  });
});
