# linda-hoeberigs

An interactive terminal portfolio for **Linda Hoeberigs**, Head of Data Science & AI at i-Genie.ai.

Run it directly with npx:

```bash
npx linda-hoeberigs
```

## What you'll see

An interactive CLI with arrow-key navigation, carrying the same content as [lindahoeberigs.com](https://lindahoeberigs.com):

- **About Me**: bio, strengths and highlights
- **Experience**: full career timeline from CPB to i-Genie.ai
- **Awards**: LinkedIn Top Voice in AI, OpenAI Token of Appreciation and six more industry awards
- **Advisory**: Royal Statistical Society, I-COM UK Advisory Board, Clarabridge CAB, Dataiku Neuron
- **Expertise**: GenAI at scale, AI transformation, stakeholder and board communication
- **Skills**: AI and data science, tools and platforms, business and leadership
- **Education**: Utrecht University, University College Roosevelt and more
- **Projects**: seven open source builds, including the NL AI Skill Index and nl-eval, with links
- **Apps**: three native iOS apps on the App Store, with links
- **Beyond the data**: the person behind the algorithms
- **Bookshelf**: 22 books that shaped my thinking, each with a one-line take
- **Contact**: email, LinkedIn and GitHub

## Without the menu

The menu needs a terminal. When the output is piped, or when you ask for it, the CLI prints and exits:

```bash
npx linda-hoeberigs --all          # every section
npx linda-hoeberigs projects       # one section
npx linda-hoeberigs --help         # usage and section names
npx linda-hoeberigs --version
```

## Features

- Interactive arrow-key menu (powered by Inquirer.js)
- Gradient ASCII art header in the site's teal
- Prose wrapped to the width of your terminal
- Works in any modern terminal, Node.js 18 or newer

## Local development

```bash
git clone https://github.com/hoeberigs/linda-hoeberigs-cli.git
cd linda-hoeberigs-cli
npm install
npm start
npm test
```

## Built with

- [Chalk](https://github.com/chalk/chalk): terminal colors
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js): interactive prompts
- [Boxen](https://github.com/sindresorhus/boxen): boxed terminal output
- [Gradient-string](https://github.com/bokub/gradient-string): gradient text

## License

MIT
