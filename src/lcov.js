
import { tags, metrics, lines as l } from 'adana-analyze';

export function functions(data) {
  const { total, passed } = metrics(data);
  return [
    `FNF: ${total}`,
    `FNH: ${passed}`,
    ...data.map(({loc, name}) => `FN: ${loc.start.line}, ${name}`),
    ...data.map(({name, count}) => `FNDA: ${count}, ${name}`),
  ];
}

export function lines(data) {
  const lines = l(data);
  const { total, passed } = metrics(lines);
  return [
    `LF: ${total}`,
    `LH: ${passed}`,
    ...lines.map(({count, line}) => `DA: ${line}, ${count}`),
  ];
}

export function branches(data) {
  const { total, passed } = metrics(data);
  return [
    `BRF: ${total}`,
    `BRH: ${passed}`,
    ...data.map(({loc, count, group}, id) =>
      `BRDA: ${loc.start.line}, ${id}, ${group}, ${count}`
    ),
  ];
}

export default function lcov(coverage) {
  const files = Object.keys(coverage);
  return files.map(file => {
    const locations = coverage[file].locations.filter(({tags}) => {
      return tags.indexOf('ignore') === -1;
    });
    const t = tags(locations, [
      'line',
      'function',
      'branch',
    ]);
    return [
      `TN:`,
      `SF: ${file}`,
      ...lines(t.line),
      ...functions(t.function),
      ...branches(t.branch),
      `end_of_record`,
    ].join('\n');
  }).join('\n');
}
