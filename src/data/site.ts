// Single source of truth for site content.
// NOTE: copy below is placeholder — swap with real content when ready.

export const site = {
  name: 'JD Pruett', // display name in the hero
  wordmark: 'Jefferson Pruett', // top-left brand
  eyebrow: 'Survey research · Neuroscience · Machine learning',
  lede: 'Neuro researcher and ML engineer, working across AI, cognition, and survey methods.',
  chips: ['Stanford · Econ & Neuro', 'Varick · Head of Engineering'],
  portrait: {
    src: '/portrait.png',
    alt: 'Painted portrait of JD Pruett',
  },

  about: {
    based: 'San Francisco, CA',
    occupied: {
      items: [
        { label: 'Varick', href: 'https://www.varickagents.com/' },
        { label: 'Ontologies of Cognitive Control', href: 'https://poldracklab.org' },
        { label: 'Euterria', href: 'https://euterria.org' },
      ],
    },
    methods: 'agents, post-training, surveys, fMRI',
    mentors: [
      { name: 'Jon Krosnick', href: 'https://profiles.stanford.edu/jon-krosnick' },
      { name: 'Russ Poldrack', href: 'https://profiles.stanford.edu/russell-poldrack' },
      { name: 'Steve Ballmer', href: 'https://en.wikipedia.org/wiki/Steve_Ballmer' },
    ],
    prose: [
      'Trained as an economist and a cognitive scientist, I like to think about how we measure that which resists measurement: public opinion, self-control, the accuracy of a poll, and how we build the systems that make those measurements legible.',
      'At Stanford I worked with Jon Krosnick on the methodology of survey accuracy, and with Russ Poldrack on the neuroscience of cognitive control. Today I build machine-learning systems and data pipelines, from neuroimaging on high-performance clusters to survey infrastructure.',
      'I care about open, reproducible work, and enjoy the slow, occasionally painful process of communicating clarity.',
    ],
  },

  contact: {
    blurb:
      'Open to research collaborations, survey work, and conversations about building things that measure the unmeasurable.',
    colophon: [
      'Drawn, set, and built in Newsreader & IBM Plex Mono — 2026.',
      'The portrait is a pencil study rendered from a photograph; it watches the cursor, and only the cursor.',
    ],
  },

  email: 'hi@jdpruett.xyz',
  links: {
    linkedin: 'https://www.linkedin.com/in/jd-pruett-4033b8194',
    github: 'https://github.com/jdpru',
    twitter: 'https://x.com/jdpruett4',
    osf: 'https://osf.io/',
    cv: '/JD-Pruett-CV.pdf', // placeholder — add the PDF to /public when ready
  },
};

export type ExperiencePhoto = { src: string; alt: string };
export type ExperienceEntry = {
  years: string;
  role: string;
  org: string;
  place: string;
  description: string[];
  tags: string[];
  photos?: ExperiencePhoto[]; // optional thumbnails shown in the expanded row
};

export const experience: ExperienceEntry[] = [
  {
    years: '2025 — Now',
    role: 'Co-founder',
    org: 'Euterria',
    place: 'San Francisco, CA',
    description: [
      'Co-founded a nonprofit building a shared home for what the Bay Area climate community already knows, helping nonprofits find each other, learn from work already done, and stop quietly rebuilding things a neighboring org solved months ago.',
      'Built the tools that let organizations turn what they already have, decks, reports, institutional memory, into something the whole community can search and build on, so good ideas spread instead of staying trapped in one org\'s files. Now connects 117 programs across 14 organizations and 269 people.',
    ],
    tags: ['Community building', 'Nonprofit partnerships', 'Climate'],
  },
  {
    years: '2025',
    role: 'Technical Consultant',
    org: 'Design & Technology Institute',
    place: 'Accra, Ghana',
    description: [
      'Led a data-modernization initiative across six campuses of a national vocational training institute, building infrastructure for the collection, analysis, and secure storage of survey data from 15,000 students.',
      'Designed the questionnaires and the end-to-end collection pipeline, then worked with faculty and staff to tailor the tooling and train them to run it themselves.',
    ],
    tags: ['Questionnaire design', 'Data pipeline', 'Dashboards', 'Staff training'],
    photos: [
      {
        src: '/gallery/design-technology-institute/dti-cohort-thumb.jpg',
        alt: 'With the Design & Technology Institute cohort in Accra.',
      },
    ],
  },
  {
    years: '2023 — Now',
    role: 'Researcher · Survey Methodology',
    org: 'Political Psychology Research Group · PI Jon Krosnick',
    place: 'Stanford, CA',
    description: [
      'Ran a large-scale methodological evaluation of the Cooperative Election Study, partitioning total survey error into sampling vs. post-stratification components and benchmarking estimates against validated election outcomes.',
      'Built a 7,000-line R codebase to harmonize longitudinal data from 15 sources — federal archives, universities, and a private provider via a negotiated data trade. Supervised five undergraduate researchers; presented at AAPOR with a manuscript under review for Best Student Paper. Code and data archived on OSF.',
    ],
    tags: ['R', 'Survey error', 'Weighting', 'Reproducibility', 'AAPOR'],
  },
  {
    years: '2024 — Now',
    role: 'Researcher · Neuroimaging',
    org: 'Poldrack Lab · PI Russell A. Poldrack',
    place: 'Stanford, CA',
    description: [
      'Led neuroimaging analyses for a pre/post intervention study combining task-based fMRI with a mobile self-control intervention in individuals with binge eating disorder and nicotine dependence.',
      'Designed and deployed a high-performance computing pipeline (Python, SLURM) for preprocessing, GLM modeling, and behavioral validation, plus group-level workflows to evaluate intervention-related changes in cognitive-control circuits. Authored the preregistration and analysis plan.',
    ],
    tags: ['fMRI', 'Python · SLURM', 'GLM', 'Preregistration'],
  },
  {
    years: '2022 — 23',
    role: 'Special Projects · Lead Researcher',
    org: 'Ballmer Group Philanthropy Projects',
    place: 'Seattle, WA',
    description: [
      'Recruited by former Microsoft CEO Steve Ballmer to lead research on his special-projects team. Designed three $450M budgets to expand afterschool education to every child in Seattle, Detroit, and Los Angeles.',
      'Led a comprehensive study of the afterschool landscape, coordinating data collection with city governments, philanthropies, and NGOs to inform large-scale, evidence-based funding strategy.',
    ],
    tags: ['Program design', 'Budgeting', 'Field study', 'Policy'],
    photos: [
      {
        src: '/gallery/ballmer/ballmer-office-thumb.jpg',
        alt: 'The Ballmer Group office in Seattle.',
      },
    ],
  },
];

export const educationSchool = 'Stanford University';

export type Education = {
  degree: string;
  thesis: string;
  award?: string;
  awardHref?: string;
  gpa: string;
  year: string;
};

export const education: Education[] = [
  {
    degree: 'M.S. Neuroscience & AI',
    thesis:
      'Ontologies of Cognitive Control: Evidence from Self-Regulatory Interventions in Binge Eating & Smoking',
    gpa: 'GPA 4.0',
    year: '2025',
  },
  {
    degree: 'B.S. Economics, with Honors',
    thesis: 'Assessing Accuracy & Weighting Effects in Matched Sample Surveys',
    award: 'Firestone Medal',
    awardHref:
      'https://economics.stanford.edu/undergraduate/honors-program/honors-prize-and-award-winners?custm_hs_thesis_award_title_value=&custm_hs_thesis_author_value=pruett&title=',
    gpa: 'GPA 4.0',
    year: '2024',
  },
];

export type WorkLink = { label: string; href?: string };
export type Work = {
  kind: string;
  status: string;
  title: string;
  summary: string;
  links: WorkLink[];
  video?: string; // YouTube video id, embedded when present
};

export const work: Work[] = [
  {
    kind: 'fMRI · Intervention',
    status: 'Finalizing manuscript',
    title: 'Ontologies of Cognitive Control',
    summary:
      'A two-stage fMRI study paired with a mobile intervention, testing whether self-control brain regions predict treatment efficacy. Integrates fMRI, task behavior, breathalyzer, Fitbit, and ecological momentary assessment.',
    links: [{ label: 'PDF soon' }],
  },
  {
    kind: 'Survey methodology',
    status: 'Under review',
    title: 'Accuracy & Weighting in Matched Sample Surveys',
    summary:
      'Seventeen years of YouGov Cooperative Election Study data, compared across weighting methods. Finds average error in election estimates exceeds 7% with no improvement over time — a challenge to nonprobability survey claims.',
    links: [
      { label: 'PDF →', href: '#' },
      { label: 'GitHub →', href: '#' },
    ],
  },
  {
    kind: 'EEG · Deep learning',
    status: 'Paper',
    title: 'Predicting Antidepressant Response from EEG',
    summary:
      'Semi-supervised and recurrent variational autoencoders learn latent EEG representations, paired with logistic classifiers and dual-loss training. Evaluated with ROC-AUC against clinical and combined baselines.',
    links: [
      { label: 'PDF →', href: '#' },
      { label: 'GitHub →', href: '#' },
    ],
  },
  {
    kind: 'Cognition · Deep learning',
    status: 'Paper',
    title: 'Dynamic Reaction-Time Modeling',
    summary:
      'LSTM and dynamical VAE models of human reaction times on cognitive tasks. Latent-space analysis suggests flexibility and stability are distinct cognitive processes — a data-driven framework consistent with recent psychology.',
    links: [
      { label: 'PDF →', href: '#' },
      { label: 'GitHub →', href: '#' },
      { label: 'Poster →', href: '#' },
    ],
  },
  {
    kind: 'Computational chem',
    status: 'Paper',
    title: 'Modeling Psychoactive Molecules at 5-HT2A',
    summary:
      'Binding analysis with SwissDock and PyMol, examining binding energies and the role of nonpolar interactions in stabilizing 5-HT2A bonding across ligands.',
    links: [{ label: 'PDF →', href: '#' }],
  },
  {
    kind: 'Energy · Econometrics',
    status: 'Paper',
    title: 'Marginal Emissions in the CA Power Grid',
    summary:
      'A Python scraper aggregating 5M data points over six years from CAISO, with an R simulation quantifying marginal emissions offset per MWh of renewable generation, plus a fixed-effects GLM and heterogeneity analysis.',
    links: [{ label: 'PDF →', href: '#' }],
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  blurb: string;
};

export const publications: Publication[] = [
  {
    title: 'Accuracy in Matched Survey Samples (CES 2006–2022)',
    venue: 'Working paper · under review',
    year: '2026',
    blurb:
      'Examines how nonprobability matched samples perform across weighting schemes, with a focus on long-term trends in error and the limits of post-stratification.',
  },
  {
    title: 'Ontologies of Cognitive Control',
    venue: 'Manuscript in preparation',
    year: '2026',
    blurb:
      'A two-stage fMRI study paired with a mobile self-control intervention, testing whether cognitive-control circuits predict treatment efficacy.',
  },
];

export type Writing = {
  outlet: string;
  title: string;
  by: string;
  href: string;
};

export const writing: Writing[] = [
  {
    outlet: 'The Atlantic',
    title: 'Poorly Timed',
    by: 'by JD Pruett and Kyle Pruett',
    href: '#',
  },
];

export type Shelf = { num: string; title: string; blurb: string; href: string };

export const explore: Shelf[] = [
  {
    num: 'I',
    title: 'Projects & Papers',
    blurb: 'A mix of research and engineering.',
    href: '/projects/',
  },
  {
    num: 'II',
    title: 'Fun Stuff',
    blurb: 'Time well spent, though perhaps spent better elsewhere.',
    href: '/personal/',
  },
  {
    num: 'III',
    title: 'Reading',
    blurb: 'Some of my favorites.',
    href: '/reading/',
  },
];

export const personalProjects: Work[] = [
  {
    kind: 'iOS app · Side project',
    status: 'Prototype',
    title: 'A reader app for The Dispatch',
    summary:
      'A month-long fan project: an iOS reader for The Dispatch built entirely on their public RSS feed. Highlight any article to create an annotation, all saved in one place and shareable with the source link auto-appended. An AI feature I call “The Correspondent” recommends recent pieces to further or challenge a view, and can fact-check or add context as you read. Podcasts play inline in the background, plus dark mode, offline reading, and semantic search across full-article embeddings. I sent it to the founders on the off chance it was useful.',
    links: [{ label: 'Watch the walkthrough →', href: 'https://youtu.be/Qtjt9tDCQG8' }],
    video: 'Qtjt9tDCQG8',
  },
];

export const personal: string[] = [
  'Outside of work, I am interested in writing — especially essays that sit somewhere between cultural observation and personal narrative.',
  'I keep circling back to questions about how people form beliefs, how norms move, and how individuals learn to navigate systems larger than themselves.',
  'I also spend a lot of time thinking about interfaces and product design: how to make technically complex systems usable without smoothing over the parts that actually matter.',
];

export type Book = { title: string; author: string; note: string };

export const reading: Book[] = [
  { title: 'Seeing Like a State', author: 'James C. Scott', note: 'On legibility and its costs' },
  { title: 'The Image', author: 'Daniel J. Boorstin', note: 'Pseudo-events and belief' },
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', note: 'Measurement of the mind' },
];
