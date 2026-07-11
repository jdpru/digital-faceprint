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
      'Trained as an economist and a cognitive scientist, I\'m interested in how you measure things that are hard to measure — public opinion, self-control, how accurate a poll actually is — and I like building the systems that make those measurements possible.',
      'At Stanford I work with Jon Krosnick on survey accuracy and with Russ Poldrack on the neuroscience of cognitive control. Today I lead ML systems at Varick.',
      'I was lucky to have mentors who lived by open science, and I try to follow their lead — sharing code and data wherever I can. I like to write, do my best not to bury the point, and enjoy reading sci-fi, political philosophy, and playing semi-pro soccer in SFSL.',
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
  href?: string; // link to the corresponding project feature
};

export const experience: ExperienceEntry[] = [
  {
    years: '2025 — Now',
    role: 'Co-founder',
    org: 'Euterria',
    place: 'San Francisco, CA',
    description: [
      'Euterria is a nonprofit I co-founded to help the Bay Area climate community find what it already collectively knows. Hundreds of organizations hold years of hard-won knowledge, in grant reports, program decks, and institutional memory, that nobody outside the org can search.',
      'We turn that scattered material into a shared, searchable map of the community\'s programs, people, and resources, so groups can build on each other\'s work instead of quietly rebuilding what a neighbor already solved. It\'s in pilot with around twenty organizations around the Bay, backed by Stanford\'s TomKat Center.',
    ],
    tags: ['Community building', 'Nonprofit partnerships', 'Climate'],
    photos: [
      {
        src: '/gallery/euterria/euterria-map-thumb.jpg',
        alt: 'Organizations across the Bay Area, mapped by what they work on.',
      },
    ],
    href: '/projects/euterria/',
  },
  {
    years: '2025',
    role: 'Technical Consultant',
    org: 'Design & Technology Institute',
    place: 'Accra, Ghana',
    description: [
      'The Design & Technology Institute is a national vocational school in Accra training thousands of young Ghanaians for skilled, work-ready careers. It had almost none of the data infrastructure it needed to understand its own students at scale.',
      'Over a summer we built that backbone from scratch: the questionnaires, the end-to-end pipeline to collect, analyze, and securely store survey data from 15,000 students across six campuses, and the dashboards to make sense of it. Just as important, we trained the faculty and staff to run the whole thing themselves after I left.',
    ],
    tags: ['Questionnaire design', 'Data pipeline', 'Dashboards', 'Staff training'],
    photos: [
      {
        src: '/gallery/design-technology-institute/dti-precision-quality-talk-thumb.jpg',
        alt: 'Speaking at a Precision Quality session in Accra.',
      },
    ],
    href: '/projects/design-technology-institute/',
  },
  {
    years: '2023 — Now',
    role: 'Researcher · Survey Methodology',
    org: 'Political Psychology Research Group · PI Jon Krosnick',
    place: 'Stanford, CA',
    description: [
      'We ran one of the largest independent evaluations of the Cooperative Election Study, the flagship survey built on the matched-sample method of YouGov, the most prominent nonprobability survey provider, and one of the most cited datasets in political science.',
      'Across seventeen years of data, we separated the error that comes from who ends up in the sample from the error that weighting is supposed to fix, benchmarking against validated election outcomes to test whether matched sampling really closes the gap between opt-in and random samples. I built the harmonization pipeline behind it and led a small team of undergraduate researchers; the work is under review and archived openly.',
    ],
    tags: ['R', 'Survey error', 'Weighting', 'Reproducibility', 'AAPOR'],
    photos: [
      {
        src: '/gallery/political-psychology-research-group/pprg-jon-krosnick-thumb.jpg',
        alt: 'With Jon Krosnick at my Stanford thesis medal ceremony.',
      },
    ],
    href: '/projects/political-psychology-research-group/',
  },
  {
    years: '2024 — Now',
    role: 'Researcher · Neuroimaging',
    org: 'Poldrack Lab · PI Russell A. Poldrack',
    place: 'Stanford, CA',
    description: [
      'This was a brain-imaging study of self-control: does the part of the brain you use to resist an impulse actually predict whether a behavioral intervention will work? We ran it as a pre/post trial in people managing binge eating and nicotine dependence, pairing task-based fMRI with a mobile intervention they used in daily life.',
      'I led the neuroimaging side, building the high-performance computing pipeline that turned raw scans into modeled, validated results, and writing the preregistration that fixed our analysis plan before we looked at outcomes. It became my master\'s thesis, Ontologies of Cognitive Control.',
    ],
    tags: ['fMRI', 'Python · SLURM', 'GLM', 'Preregistration'],
    href: '/projects/ontologies-of-cognitive-control/',
  },
  {
    years: '2022 — 23',
    role: 'Special Projects · Lead Researcher',
    org: 'Ballmer Group Philanthropy Projects',
    place: 'Seattle, WA',
    description: [
      'Steve Ballmer\'s team brought me on to answer a concrete question: what would it cost to give every child in a city access to afterschool programming, and how would you actually spend that money well?',
      'I led a study of the afterschool landscape across Seattle, Detroit, and Los Angeles, coordinating data from city governments, philanthropies, and nonprofits, and designed three roughly $450M funding plans grounded in what each city actually needed.',
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

export type EducationAward = { label: string; href?: string };
export type EducationPaper = { title: string; href?: string };
export type Education = {
  degree: string;
  thesis: string;
  awards?: EducationAward[];
  papers?: EducationPaper[];
  gpa: string;
  year: string;
};

export const education: Education[] = [
  {
    degree: 'M.S. Neuroscience & AI',
    thesis:
      'Ontologies of Cognitive Control: Evidence from Self-Regulatory Interventions in Binge Eating & Smoking',
    papers: [
      {
        title:
          'Latent LSTM-VAE Representations of Cognitive Stability and Flexibility in the Task-Switching Paradigm',
        href: '/projects/dynamic-reaction-time-modeling/',
      },
      {
        title:
          'Semi-Supervised MLP and GRU-Based Recurrent Variational Autoencoders for Antidepressant Response Prediction from EEG',
        href: '/projects/antidepressant-response-eeg/',
      },
    ],
    gpa: 'GPA 4.0',
    year: '2025',
  },
  {
    degree: 'B.S. Economics, with Honors',
    thesis: 'Assessing Accuracy & Weighting Effects in Matched Sample Surveys',
    awards: [
      {
        label: 'Firestone Medal',
        href: 'https://economics.stanford.edu/undergraduate/honors-program/honors-prize-and-award-winners?custm_hs_thesis_award_title_value=&custm_hs_thesis_author_value=pruett&title=',
      },
      { label: '4× Regional Ethics Bowl Champion · National Runner-Up' },
    ],
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
