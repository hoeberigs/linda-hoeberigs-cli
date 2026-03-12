#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import boxen from 'boxen';
import gradient from 'gradient-string';
import { profile, skills, experience, education, awards, highlights } from './data.js';

// ===== Theme =====
const purple = chalk.hex('#6b5ce7');
const purpleLight = chalk.hex('#8b7ff0');
const warm = chalk.hex('#e8a87c');
const teal = chalk.hex('#41b3a3');
const dim = chalk.dim;
const bold = chalk.bold;
const grad = gradient(['#6b5ce7', '#41b3a3']);

// ===== ASCII Header =====
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

  const card = boxen(
    `${bold(profile.name)}  ${dim('·')}  ${purple(profile.title)}\n` +
    `${dim(profile.company)}  ${dim('·')}  ${dim(profile.location)}\n\n` +
    `${warm(profile.tagline)}\n\n` +
    `${dim('Email')}     ${profile.email}\n` +
    `${dim('LinkedIn')}  ${purpleLight(profile.linkedin)}\n` +
    `${dim('GitHub')}    ${purpleLight(profile.github)}`,
    {
      padding: 1,
      margin: { top: 0, bottom: 1, left: 2, right: 2 },
      borderStyle: 'round',
      borderColor: '#6b5ce7',
    }
  );

  console.log(card);
}

// ===== Section Renderers =====

function showAbout() {
  console.log();
  console.log(purple(bold('  ── About Me ──')));
  console.log();

  const paragraphs = profile.bio.split('\n\n');
  for (const p of paragraphs) {
    console.log(`  ${p.replace(/\n/g, '\n  ')}`);
    console.log();
  }

  console.log(purple('  Highlights'));
  console.log();
  const cols = 2;
  for (let i = 0; i < highlights.length; i += cols) {
    const row = highlights.slice(i, i + cols)
      .map(h => `  ${teal('▸')} ${h}`.padEnd(40))
      .join('');
    console.log(row);
  }
  console.log();
}

function showSkills() {
  console.log();
  console.log(purple(bold('  ── Skills & Expertise ──')));
  console.log();

  for (const [category, items] of Object.entries(skills)) {
    console.log(`  ${warm(category)}`);
    const cols = 3;
    for (let i = 0; i < items.length; i += cols) {
      const row = items.slice(i, i + cols)
        .map(s => `    ${dim('●')} ${s}`.padEnd(30))
        .join('');
      console.log(row);
    }
    console.log();
  }
}

function showExperience() {
  console.log();
  console.log(purple(bold('  ── Experience ──')));
  console.log();

  for (const job of experience) {
    console.log(`  ${bold(job.role)}`);
    console.log(`  ${teal(job.company)}  ${dim('·')}  ${dim(job.dates)}`);
    console.log(`  ${dim(job.description)}`);
    if (job.award) {
      console.log(`  ${warm('★')} ${warm(job.award)}`);
    }
    console.log();
  }
}

function showEducation() {
  console.log();
  console.log(purple(bold('  ── Education ──')));
  console.log();

  for (const edu of education) {
    console.log(`  ${bold(edu.degree)}`);
    console.log(`  ${teal(edu.school)}  ${dim('·')}  ${dim(edu.dates)}`);
    console.log(`  ${dim(edu.focus)}`);
    console.log();
  }
}

function showAwards() {
  console.log();
  console.log(purple(bold('  ── Awards & Recognition ──')));
  console.log();

  for (const award of awards) {
    const year = award.year ? dim(` (${award.year})`) : '';
    console.log(`  ${warm('★')} ${bold(award.name)}${year}`);
    console.log(`    ${dim(award.detail)}`);
    console.log();
  }
}

function showContact() {
  console.log();
  console.log(purple(bold('  ── Get in Touch ──')));
  console.log();

  const card = boxen(
    `${bold("Let's connect!")}\n\n` +
    `${dim('Email')}     ${profile.email}\n` +
    `${dim('LinkedIn')}  ${purpleLight(profile.linkedin)}\n` +
    `${dim('GitHub')}    ${purpleLight(profile.github)}\n\n` +
    `${dim(profile.location)}`,
    {
      padding: 1,
      margin: { left: 2 },
      borderStyle: 'round',
      borderColor: '#41b3a3',
    }
  );

  console.log(card);
  console.log();
}

// ===== Menu =====

const MENU_CHOICES = [
  { name: `${purple('❯')} About Me         ${dim('— Bio & highlights')}`, value: 'about' },
  { name: `${purple('❯')} Skills            ${dim('— Technical & leadership')}`, value: 'skills' },
  { name: `${purple('❯')} Experience        ${dim('— Career timeline')}`, value: 'experience' },
  { name: `${purple('❯')} Education         ${dim('— Degrees & certifications')}`, value: 'education' },
  { name: `${purple('❯')} Awards            ${dim('— Recognition & honours')}`, value: 'awards' },
  { name: `${purple('❯')} Contact           ${dim('— Get in touch')}`, value: 'contact' },
  new inquirer.Separator(dim('  ─────────────────────────────────')),
  { name: `${dim('  Exit')}`, value: 'exit' },
];

const SECTION_MAP = {
  about: showAbout,
  skills: showSkills,
  experience: showExperience,
  education: showEducation,
  awards: showAwards,
  contact: showContact,
};

async function mainMenu() {
  const { section } = await inquirer.prompt([
    {
      type: 'list',
      name: 'section',
      message: purple('What would you like to know?'),
      choices: MENU_CHOICES,
      pageSize: 10,
    }
  ]);

  if (section === 'exit') {
    console.log();
    console.log(grad('  Thanks for stopping by! ✨'));
    console.log();
    process.exit(0);
  }

  SECTION_MAP[section]();

  return mainMenu();
}

// ===== Entry Point =====
console.clear();
printHeader();
mainMenu();
