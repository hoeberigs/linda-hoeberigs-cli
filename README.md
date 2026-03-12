# linda-hoeberigs

An interactive terminal portfolio for **Linda Hoeberigs** — Head of Data Science & AI at i-Genie.ai.

Run it directly with npx:

```bash
npx linda-hoeberigs
```

## What You'll See

An interactive CLI with arrow-key navigation to browse:

- **About Me** — Bio, highlights, and quick stats
- **Skills** — AI/ML, tools, platforms, and leadership competencies
- **Experience** — Full career timeline from CPB to i-Genie.ai
- **Education** — Degrees from Utrecht University, UCR, and more
- **Awards** — LinkedIn Top Voice in AI, OpenAI Token of Appreciation, 8+ industry awards
- **Contact** — Email, LinkedIn, and GitHub links

## Features

- Interactive arrow-key menu (powered by Inquirer.js)
- Gradient ASCII art header
- Color-coded sections with boxed cards
- Works in any modern terminal

## Local Development

```bash
git clone https://github.com/hoeberigs/linda-hoeberigs-cli.git
cd linda-hoeberigs-cli
npm install
npm start
```

## Tech Stack

- Node.js (ES modules)
- [Chalk](https://github.com/chalk/chalk) — terminal colors
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) — interactive prompts
- [Boxen](https://github.com/sindresorhus/boxen) — boxed terminal output
- [Gradient-string](https://github.com/bokub/gradient-string) — gradient text

## License

MIT
