import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import * as data from '../data.js';

const run = (...args) => execFileSync('node', ['index.js', ...args], { encoding: 'utf8', env: { ...process.env, NO_COLOR: '1', FORCE_COLOR: '0' } });
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('content matches the site section counts', () => {
  assert.equal(data.experience.length, 7);
  assert.equal(data.awards.length, 8);
  assert.equal(data.advisory.length, 4);
  assert.equal(data.expertise.length, 3);
  assert.equal(data.education.length, 4);
  assert.equal(data.projects.length, 7);
  assert.equal(data.apps.length, 3);
  assert.equal(data.books.length, 22);
  assert.equal(Object.keys(data.skills).length, 3);
});

test('every project and app has a description, tech and at least one https link', () => {
  for (const item of [...data.projects, ...data.apps]) {
    assert.ok(item.description.length > 40, item.name);
    assert.ok(item.tech.length > 0, item.name);
    assert.ok(item.links.length > 0, item.name);
    for (const l of item.links) assert.match(l.url, /^https:\/\//, `${item.name}: ${l.url}`);
  }
});

test('every book has a take and a tag', () => {
  for (const b of data.books) assert.ok(b.take && b.tag && b.author && b.year, b.title);
});

test('no em or en dashes anywhere in the content', () => {
  assert.doesNotMatch(JSON.stringify(data), /[–—]/);
});

test('--version prints the package version', () => {
  assert.equal(run('--version').trim(), pkg.version);
});

test('--all prints every section without a terminal', () => {
  const out = run('--all');
  for (const needle of ['About Me', 'Experience', 'Awards & Honours', 'Board & Advisory Positions', 'Areas of Expertise',
    'Skills & Technologies', 'Academic Background', 'Side Projects', 'Apps', 'Beyond the Data', 'The Bookshelf', 'Get in Touch',
    'nl-eval', 'The NL AI Skill Index', 'BarTrace', 'Royal Statistical Society', 'How Asia Works', 'hello@lindahoeberigs.com']) {
    assert.ok(out.includes(needle), `missing: ${needle}`);
  }
});

test('piped output falls back to printing everything instead of crashing', () => {
  const out = execFileSync('node', ['index.js'], { encoding: 'utf8', input: '', env: { ...process.env, NO_COLOR: '1' } });
  assert.ok(out.includes('Get in Touch'));
});

test('a single section can be printed by name', () => {
  const out = run('projects');
  assert.ok(out.includes('prompteval'));
  assert.ok(!out.includes('The Bookshelf'));
});

test('an unknown section exits non-zero and shows help', () => {
  assert.throws(() => run('nonsense'), err => err.status === 1 && /Unknown section/.test(err.stderr));
});
