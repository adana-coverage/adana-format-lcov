import path from 'path';
import { readFileSync } from 'fs';
import { expect } from 'chai';

import lcov from '../../src/lcov';

const fixture = path.join(__dirname, '/../fixture/coverage.json');
const data = JSON.parse(readFileSync(fixture, 'utf8'));

it('should output something', () => {
  const result = lcov(data);
  expect(result).to.contain('SF: src/instrumenter.js');
});

it('should work with no branches', () => {
  const locs = data['src/instrumenter.js'].locations.filter(loc => {
    return loc.tags.indexOf('branch') === -1;
  });
  const result = lcov({
    'src/instrumenter.js': { locations: locs },
  });
  expect(result).to.contain('SF: src/instrumenter.js');
});
