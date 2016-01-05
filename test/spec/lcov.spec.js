import path from 'path';
import { readFileSync } from 'fs';
import { expect } from 'chai';

import lcov from '../../src/lcov';

const fixture = path.join(__dirname, '/../fixture/coverage.json');
const data = JSON.parse(readFileSync(fixture, 'utf8'));

it('should filter', () => {
  const result = lcov(data);
  expect(result).to.contain('SF: src/instrumenter.js');
});
