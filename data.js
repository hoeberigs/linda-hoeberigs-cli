export const profile = {
  name: 'Linda Hoeberigs',
  title: 'Head of Data Science & AI',
  company: 'i-Genie.ai',
  location: 'The Randstad, Netherlands',
  email: 'hello@lindahoeberigs.com',
  linkedin: 'https://linkedin.com/in/linda-hoeberigs/',
  github: 'https://github.com/hoeberigs',
  website: 'https://lindahoeberigs.com',
  tagline: 'Scaling AI from strategy to shipped product.',
  bio: `I'm a data science and AI leader with over a decade of experience driving AI strategy, building high-performing teams, and shipping products that move the needle.

At i-Genie.ai (consumer insights without surveys, faster, better, cheaper) I lead Data Science & AI, define the early product roadmap, and took Brand Pulse, ACQ and Innov8 from zero to market. Under my leadership, i-Genie became one of OpenAI's top API consumers globally (10B+ tokens).

Before i-Genie, I spent 8+ years at Unilever where I scaled a data science function from being one of the first scientists to a 25-person Data Science & AI Engineering organisation within Consumer Market Insights, running projects across Consumer Insights, Marketing, NPD, HR and R&D. I set the technical vision, hired and developed talent, and delivered award-winning solutions in NLP, computer vision, and responsible AI.

What sets me apart: I combine deep technical fluency with commercial instinct and stakeholder storytelling. I don't just understand the models; I know how to align them to P&L impact, build the teams to deliver them, and communicate the "so what" to the boardroom.`
};

export const skills = {
  'AI & Data Science': [
    'LLM Engineering', 'RAG & Agentic AI', 'Prompt Engineering',
    'NLP / Text Classification', 'Machine Learning', 'Deep Learning',
    'Computer Vision', 'Graph ML', 'Econometrics', 'Network Analysis'
  ],
  'Tools & Platforms': [
    'Python', 'PySpark', 'SQL', 'Azure', 'Databricks',
    'Power BI', 'Dataiku', 'Tableau', 'Git', 'Hadoop'
  ],
  'Business & Leadership': [
    'Product Ownership (PSPO I)', 'Scrum (PSM I)', 'Stakeholder Management',
    'Team Leadership', 'Public Speaking', 'Digital Marketing', 'E-commerce'
  ]
};

export const experience = [
  {
    role: 'Head of Data Science & AI',
    company: 'i-Genie.ai',
    dates: 'Mar 2023 — Present',
    description: 'Own the AI strategy, early product roadmap, and technical direction. Took three products (Brand Pulse, ACQ, Innov8) from concept to market. Grew the company into one of OpenAI\'s top API consumers globally (10B+ tokens).',
    award: 'OpenAI Token of Appreciation'
  },
  {
    role: 'Head of Data Science & AI',
    company: 'Unilever',
    dates: 'Jun 2021 — Jan 2023',
    description: 'Set the technical vision and operating model for Data Science, Innovation and AI across Social & Business Analytics, Data Driven Marketing, and Consumer Engagement. Managed a 25+ person organisation spanning data scientists, ML engineers, and AI specialists.',
    award: 'Dataiku Moonshot Pioneer'
  },
  {
    role: 'DS & AI Engineering Manager',
    company: 'Unilever',
    dates: 'Jun 2019 — Jun 2021',
    description: 'Stood up the AI engineering capability for Consumer Market Insight. Defined the E2E delivery model, embedded AI into core marketing processes, and drove cross-functional adoption across trends, e-commerce, M&A, content, and activation.',
    award: 'i-com Award, Responsible AI Award'
  },
  {
    role: 'Lead Data Science Manager',
    company: 'Unilever · London',
    dates: 'Mar 2017 — Jun 2019',
    description: 'First management role. Built and led a data science team, owned the innovation pipeline, and drove industrialisation of new tools and methodologies across Unilever\'s Global People Data Centre. Youngest mid-level manager in Unilever history at the time of promotion.',
    award: 'MRS Computer Vision & NLP Award'
  },
  {
    role: 'Data Scientist',
    company: 'Unilever · London',
    dates: 'Sep 2015 — Feb 2017',
    description: 'Delivered analytics projects across Marketing, Finance, and Supply Chain, leveraging data from social media, search, and internal sources. Designed industrialisable analytics tools and evaluated emerging technologies for adoption.'
  },
  {
    role: 'Data Science Secondment',
    company: 'Twitter · Boulder, CO',
    dates: '2016 · 2 months',
    description: 'Secondment with Twitter\'s data services team as a Unilever data scientist, working on social analytics capabilities.'
  },
  {
    role: 'Researcher Macroeconomics',
    company: 'Centraal Planbureau (CPB)',
    dates: 'May — Sep 2014',
    description: 'Macroeconomic research on labour hoarding in the Dutch labour market at the Netherlands Bureau for Economic Policy Analysis.'
  }
];

export const education = [
  {
    degree: 'MSc International Financial Economics / Econometrics',
    school: 'Utrecht University',
    dates: '2014 — 2015',
    focus: 'Quantitative Finance, Risk Management, M&A'
  },
  {
    degree: 'BSc Social Sciences (Hons.), Cum Laude',
    school: 'University College Roosevelt',
    dates: '2011 — 2014',
    focus: 'Economics, Finance, Political Science, Methods & Statistics'
  },
  {
    degree: 'Corporate Law · Summer University',
    school: 'Humboldt-Universität zu Berlin',
    dates: '2014',
    focus: 'Grade: 100/100, A+'
  },
  {
    degree: 'Le Diplôme de français B1+',
    school: 'Université catholique de Lyon',
    dates: '2013',
    focus: 'Grade: 83.5/100, A'
  }
];

export const awards = [
  { name: 'LinkedIn Top Voice in AI', year: '2023', detail: 'Recognised as a leading voice in artificial intelligence on LinkedIn' },
  { name: 'OpenAI Token of Appreciation', year: '', detail: 'Honoured for surpassing 10 billion tokens — one of OpenAI\'s top API users globally' },
  { name: 'Dataiku Moonshot Pioneer', year: '', detail: 'Frontrunner Award for pioneering AI innovation at scale' },
  { name: 'Dataiku Responsible AI', year: '', detail: 'Frontrunner Award for building responsible and ethical AI systems' },
  { name: 'i-com Award', year: '', detail: 'Industry recognition for Influencer Fraud Detection Solution' },
  { name: 'MRS Award — Computer Vision', year: '', detail: 'Market Research Society award for Computer Vision Solution' },
  { name: 'MRS Award — Language Analyzer', year: '', detail: 'Market Research Society award for Language Analyzer, an NLP solution' },
  { name: 'Unilever Data for Good', year: '', detail: 'Award for applying data science to create positive social impact' },
  { name: 'Fellow, Royal Statistical Society', year: '2016', detail: 'Professional membership since 2016' }
];

export const projects = [
  {
    name: 'AI Job Market Tracker NL',
    description: 'Scrapes, classifies, and tracks AI/ML/Data Science job listings from Dutch job sites over time. SQLite database, Chart.js dashboard, and automated weekly updates via GitHub Actions.',
    tech: ['Python', 'SQLite', 'Chart.js', 'GitHub Actions']
  },
  {
    name: 'Terminal Portfolio CLI',
    description: 'An interactive terminal portfolio you can run with npx — you are looking at it right now.',
    tech: ['Node.js', 'Chalk', 'Inquirer']
  },
  {
    name: 'Page Summarizer',
    description: 'A Chrome extension that summarises any web page with AI. Key points, sentiment analysis, and reading time estimates in one click.',
    tech: ['Chrome Extension', 'AI', 'JavaScript']
  },
  {
    name: 'Diaper Price Tracker',
    description: 'A Python CLI that scrapes 4 major Dutch retailers for Pampers Premium Protection prices and ranks them by price per unit. JSON-LD extraction and Playwright browser automation.',
    tech: ['Python', 'Playwright', 'Rich']
  },
  {
    name: 'prompteval',
    description: 'A lightweight, zero-dependency Python framework for scoring and comparing LLM prompt outputs. 10+ built-in scorers, model-agnostic runners, side-by-side benchmarking with variance analysis.',
    tech: ['Python', 'LLM Evaluation', 'Zero Dependencies']
  }
];

export const apps = [
  {
    name: 'De BabyProof App',
    description: 'Native iOS app that helps expecting and new parents baby-proof their home room by room: expert-backed safety checklists, a preparation list (uitzetlijst), product guides, stage-based recommendations, progress tracking and partner sharing. Bilingual NL/EN.',
    tech: ['SwiftUI', 'Supabase', 'iOS 17+']
  },
  {
    name: 'GymLog Powerlifting Tracker',
    description: 'Native iOS app for powerlifters: log sessions with top sets, back-offs and RPE, build training programs, track e1RM progress, warm-up and plate calculators, rest timer, and competition scoring (Wilks, DOTS, IPF GL). All data stays on device.',
    tech: ['SwiftUI', 'SwiftData', 'Swift Charts', 'iOS 17+']
  }
];

export const books = [
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', year: '2011' },
  { title: 'Fooled by Randomness', author: 'Nassim Nicholas Taleb', year: '2001' },
  { title: 'The Culture Map', author: 'Erin Meyer', year: '2014' },
  { title: 'The Anxious Generation', author: 'Jonathan Haidt', year: '2024' },
  { title: 'Everybody Lies', author: 'Seth Stephens-Davidowitz', year: '2017' },
  { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', year: '2014' },
  { title: 'No Rules Rules', author: 'Erin Meyer & Reed Hastings', year: '2020' },
  { title: 'Creativity, Inc.', author: 'Ed Catmull', year: '2014' },
  { title: 'The Ministry for the Future', author: 'Kim Stanley Robinson', year: '2020' },
  { title: 'Burn', author: 'Herman Pontzer', year: '2021' },
  { title: 'Invisible Women', author: 'Caroline Criado Pérez', year: '2019' },
  { title: 'The Power of Habit', author: 'Charles Duhigg', year: '2012' },
  { title: 'Measure What Matters', author: 'John Doerr', year: '2017' },
  { title: 'How Brands Grow', author: 'Byron Sharp', year: '2010' },
  { title: 'Zero to One', author: 'Peter Thiel', year: '2014' },
  { title: 'Outliers', author: 'Malcolm Gladwell', year: '2008' },
  { title: 'En finir avec Eddy Bellegueule', author: 'Édouard Louis', year: '2014' },
  { title: 'Life 3.0', author: 'Max Tegmark', year: '2017' },
  { title: 'When Breath Becomes Air', author: 'Paul Kalanithi', year: '2016' },
  { title: 'Klara and the Sun', author: 'Kazuo Ishiguro', year: '2021' },
  { title: 'Blockchain Chicken Farm', author: 'Xiaowei Wang', year: '2020' },
  { title: 'How Asia Works', author: 'Joe Studwell', year: '2013' }
];

export const highlights = [
  '10+ Years in AI',
  '20+ Products shipped',
  '8 Industry Awards',
  '25-person org built from scratch',
  '10B+ OpenAI tokens processed',
  'National Champion in Basketball',
  'Lived in 6 countries',
  '3 Languages spoken'
];
