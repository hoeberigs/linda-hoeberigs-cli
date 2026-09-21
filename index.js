#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import boxen from 'boxen';
import gradient from 'gradient-string';
import {
  profile, strengths, highlights, focus, skills, experience, awards, advisory,
  expertise, education, projects, apps, beyond, books
} from './data.js';

const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

// ===== Theme: the teal of lindahoeberigs.com =====
const teal = chalk.hex('#14b8a6');
const mint = chalk.hex('#5eead4');
const dim = chalk.dim;
const bold = chalk.bold;
const grad = gradient(['#0d9488', '#5eead4']);

const WIDTH = Math.max(48, Math.min(process.stdout.columns || 80, 92) - 4);

// Wrap prose to the terminal so long descriptions do not break mid-word.
function wrap(text, indent = '  ', width = WIDTH) {
  const out = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    if (line && (line + ' ' + word).length > width) { out.push(indent + line); line = word; }
    else line = line ? line + ' ' + word : word;
  }
  if (line) out.push(indent + line);
  return out.join('\n');
}

function heading(title) {
  console.log();
  console.log(teal(bold(`  ── ${title} ──`)));
  console.log();
}

function columns(items, cols, width, bullet) {
  for (let i = 0; i < items.length; i += cols) {
    console.log(items.slice(i, i + cols).map(s => `  ${bullet} ${s}`.padEnd(width)).join(''));
  }
}

function links(list) {
  for (const l of list || []) console.log(`  ${dim(l.label.padEnd(15))}${mint(l.url)}`);
}

// ===== Header =====
function printHeader() {
  const art = `
  ╦  ╦╔╗╔╔╦╗╔═╗
  ║  ║║║║ ║║╠═╣
  ╩═╝╩╝╚╝═╩╝╩ ╩
  ╦ ╦╔═╗╔═╗╔╗ ╔═╗╦═╗╦╔═╗╔═╗
  ╠═╣║ ║║╣ ╠╩╗║╣ ╠╦╝║║ ╦╚═╗
  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╚═╩╚═╝╚═╝`;

  console.log(grad(art));
  console.log();
  console.log(boxen(
    `${bold(profile.name)}  ${dim('·')}  ${teal(profile.title)}\n` +
    `${dim(profile.company)}  ${dim('·')}  ${dim(profile.location)}\n\n` +
    `${mint(profile.tagline)}\n\n` +
    `${dim('Email')}     ${profile.email}\n` +
    `${dim('LinkedIn')}  ${mint(profile.linkedin)}\n` +
    `${dim('GitHub')}    ${mint(profile.github)}\n` +
    `${dim('Website')}   ${mint(profile.website)}`,
    { padding: 1, margin: { top: 0, bottom: 1, left: 2, right: 2 }, borderStyle: 'round', borderColor: '#0d9488' }
  ));
}

// ===== Sections =====
function showAbout() {
  heading('About Me');
  console.log(wrap(`${profile.tagline} ${profile.lede}`));
  console.log();
  for (const p of profile.bio.split('\n\n')) { console.log(wrap(p)); console.log(); }
  for (const s of strengths) {
    console.log(`  ${bold(s.name)}`);
    console.log(dim(wrap(s.detail)));
    console.log();
  }
  console.log(teal('  Highlights'));
  console.log();
  columns(highlights, 2, 42, teal('▸'));
  console.log();
  console.log(`  ${dim(focus.join('  /  '))}`);
  console.log();
}

function showExperience() {
  heading('Experience');
  for (const job of experience) {
    console.log(`  ${bold(job.role)}`);
    console.log(`  ${teal(job.company)}  ${dim('·')}  ${dim(job.dates)}`);
    console.log(dim(wrap(job.description)));
    if (job.awards.length) console.log(`  ${mint('★')} ${mint(job.awards.join(', '))}`);
    console.log();
  }
}

function showAwards() {
  heading('Awards & Honours');
  for (const a of awards) {
    console.log(`  ${mint('★')} ${bold(a.name)}`);
    console.log(dim(wrap(a.detail, '    ')));
    console.log();
  }
}

function showAdvisory() {
  heading('Board & Advisory Positions');
  for (const a of advisory) {
    console.log(`  ${bold(a.name)}${a.dates ? dim(`  ·  ${a.dates}`) : ''}`);
    console.log(`  ${dim(a.detail)}`);
    console.log();
  }
}

function showExpertise() {
  heading('Areas of Expertise');
  for (const e of expertise) {
    console.log(`  ${bold(e.name)}  ${dim('·')}  ${teal(e.theme)}`);
    console.log(dim(wrap(e.detail)));
    console.log();
  }
}

function showSkills() {
  heading('Skills & Technologies');
  for (const [category, items] of Object.entries(skills)) {
    console.log(`  ${mint(category)}`);
    columns(items, 2, 38, dim('●'));
    console.log();
  }
}

function showEducation() {
  heading('Academic Background');
  for (const edu of education) {
    console.log(`  ${bold(edu.degree)}`);
    console.log(`  ${teal(edu.school)}  ${dim('·')}  ${dim(edu.dates)}`);
    console.log(`  ${dim(edu.focus)}`);
    console.log();
  }
}

function showWork(title, list) {
  heading(title);
  for (const item of list) {
    console.log(`  ${bold(item.name)}`);
    console.log(dim(wrap(item.description)));
    console.log(`  ${teal(item.tech.join(' · '))}`);
    links(item.links);
    console.log();
  }
}

function showBeyond() {
  heading('Beyond the Data');
  for (const p of beyond.paragraphs) { console.log(wrap(p)); console.log(); }
  columns(beyond.facts.map(f => `${bold(f.name)} ${dim(f.detail)}`), 1, 0, teal('▸'));
  console.log();
}

function showBooks() {
  heading('The Bookshelf');
  console.log(dim(wrap(`${books.length} books that shaped how I think about data, people, and the world.`)));
  console.log();
  books.forEach((b, i) => {
    console.log(`  ${dim(String(i + 1).padStart(2, '0'))} ${bold(b.title)} ${dim('· ' + b.author + ', ' + b.year)}`);
    console.log(`     ${b.take} ${teal(b.tag)}`);
  });
  console.log();
}

function showContact() {
  heading('Get in Touch');
  console.log(boxen(
    `${bold("Let's talk.")}\n\n` +
    `${dim('Email')}     ${profile.email}\n` +
    `${dim('LinkedIn')}  ${mint(profile.linkedin)}\n` +
    `${dim('GitHub')}    ${mint(profile.github)}\n` +
    `${dim('Website')}   ${mint(profile.website)}\n\n` +
    `${dim(profile.location)}`,
    { padding: 1, margin: { left: 2 }, borderStyle: 'round', borderColor: '#14b8a6' }
  ));
  console.log();
}

const SECTIONS = [
  ['about', 'About Me', 'Bio, strengths & highlights', showAbout],
  ['experience', 'Experience', 'Career timeline', showExperience],
  ['awards', 'Awards', 'Recognition & honours', showAwards],
  ['advisory', 'Advisory', 'Board & advisory positions', showAdvisory],
  ['expertise', 'Expertise', 'What I speak and advise on', showExpertise],
  ['skills', 'Skills', 'Technical & leadership', showSkills],
  ['education', 'Education', 'Degrees & certifications', showEducation],
  ['projects', 'Projects', 'Open source builds', () => showWork('Side Projects', projects)],
  ['apps', 'Apps', 'iOS apps on the App Store', () => showWork('Apps', apps)],
  ['beyond', 'Beyond the data', 'The person behind the algorithms', showBeyond],
  ['books', 'Bookshelf', 'Books that shaped my thinking', showBooks],
  ['contact', 'Contact', 'Get in touch', showContact],
];
const SECTION_MAP = Object.fromEntries(SECTIONS.map(([key, , , fn]) => [key, fn]));

function printHelp() {
  console.log(`
  ${bold('linda-hoeberigs')} ${dim('v' + version)}

  ${dim('Usage')}
    npx linda-hoeberigs                 interactive menu
    npx linda-hoeberigs --all           print every section and exit
    npx linda-hoeberigs <section>       print one section and exit
    npx linda-hoeberigs --version

  ${dim('Sections')}
    ${SECTIONS.map(([key]) => key).join(', ')}
`);
}

async function mainMenu() {
  const { section } = await inquirer.prompt([{
    type: 'list',
    name: 'section',
    message: teal('What would you like to know?'),
    choices: [
      ...SECTIONS.map(([key, label, hint]) => ({ name: `${teal('❯')} ${label.padEnd(17)} ${dim(hint)}`, value: key })),
      new inquirer.Separator(dim('  ─────────────────────────────────')),
      { name: dim('  Exit'), value: 'exit' },
    ],
    pageSize: 15,
  }]);

  if (section === 'exit') return sayGoodbye();
  SECTION_MAP[section]();
  return mainMenu();
}

function sayGoodbye() {
  console.log();
  console.log(grad('  Thanks for stopping by.'));
  console.log();
}

// ===== Entry point =====
const args = process.argv.slice(2).map(a => a.replace(/^-+/, '').toLowerCase());

if (args.includes('version') || args.includes('v')) {
  console.log(version);
} else if (args.includes('help') || args.includes('h')) {
  printHelp();
} else if (args.length && !args.includes('all')) {
  const unknown = args.filter(a => !SECTION_MAP[a]);
  if (unknown.length) {
    console.error(`  Unknown section: ${unknown.join(', ')}`);
    printHelp();
    process.exitCode = 1;
  } else {
    args.forEach(a => SECTION_MAP[a]());
  }
} else if (args.includes('all') || !process.stdin.isTTY || !process.stdout.isTTY) {
  // Piped or scripted: a menu cannot be answered, so print everything.
  printHeader();
  SECTIONS.forEach(([, , , fn]) => fn());
} else {
  console.clear();
  printHeader();
  mainMenu().catch(err => {
    // Ctrl+C inside the prompt is a normal way to leave, not an error.
    if (err && (err.name === 'ExitPromptError' || err.isTtyError)) return sayGoodbye();
    throw err;
  });
}
