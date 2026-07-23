// Single source of truth for site content.
// NOTE: copy below is placeholder — swap with real content when ready.

export const site = {
  name: 'JD Pruett', // display name in the hero
  wordmark: 'Jefferson Pruett', // top-left brand
  lede: 'Neuro researcher and ML engineer, working across AI, cognition, and survey methods.',
  chips: ['Stanford · Econ & Neuro', 'Varick · Head of Engineering'],
  portrait: {
    src: '/portrait.jpg',
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
      'I\'m interested in techniques to measure that which resists measurement — self-control and cognitive flexibility, public opinion and survey trustworthiness — and I like building the systems that make those measurements possible.',
      'At Stanford I work with Jon Krosnick on survey accuracy and with Russ Poldrack on the neuroscience of cognitive control. Today I lead ML systems at Varick.',
      'I was lucky to have mentors who lived by open science, and I try to follow their lead by sharing code and data wherever I can. I like to write, do my best not to bury the point, and enjoy reading sci-fi, political philosophy, and playing semi-pro soccer in SFSL.',
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

export type ExperiencePhoto = {
  src?: string;
  alt: string;
  objectPosition?: string;
  kind?: 'euterria-search';
};
export type ExperienceDescription = string | { html: string };
export type ExperienceEntry = {
  years: string;
  role: string;
  org: string;
  orgDetail?: string;
  place: string;
  description: ExperienceDescription[];
  tags: string[];
  photos?: ExperiencePhoto[]; // optional thumbnails shown in the expanded row
  href?: string; // link to the corresponding project feature
  orgHref?: string; // external organization link
};

export const experience: ExperienceEntry[] = [
  {
    years: '2025 — Now',
    role: 'Head of Engineering',
    org: 'Varick',
    place: 'San Francisco, CA',
    description: [
      'I lead engineering at Varick, building the product and ML systems behind enterprise agent deployments.',
      'The work is less sexy than Twitter might have you believe. Building good ML systems in the enterprise is largely an engineering challenge, finding the right blend of durable execution, data science, permissions, and edge-case handling.',
    ],
    tags: ['Product engineering', 'ML systems', 'AI agents', 'Enterprise software'],
    orgHref: 'https://www.varickagents.com/',
    photos: [
      {
        src: '/gallery/varick/ai-agents-maze-thumb.jpg',
        alt: 'Varick Agents illustration of a person navigating a maze-shaped brain.',
      },
    ],
  },
  {
    years: '2025 — Now',
    role: 'Co-founder',
    org: 'Euterria',
    place: 'San Francisco, CA',
    description: [
      'Nonprofits compete for the same funding, but that competition doesn\'t reliably produce differentiation or efficiency. Collaboration would help, but the cost of finding partners and coordinating work generally outweighs the benefit. Euterria seeks to lower the collaboration cost.',
      'Built for Bay Area climate nonprofits, Euterria indexes knowledge scattered across the network, from who\'s best at what to practices buried in grant reports and failed experiments in internal decks. It turns that knowledge into a network-wide internal search engine and collaboration platform. We\'re funded by Stanford\'s TomKat Center and piloting with around thirty organizations around the Bay.',
    ],
    tags: ['Community building', 'Nonprofit partnerships', 'Climate'],
    orgHref: 'https://euterria.org/',
    photos: [
      {
        kind: 'euterria-search',
        alt: 'Animated Euterria search interface.',
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
      {
        html: 'The Design & Technology Institute is a vocational school in Accra founded by the ever-inspirational <a href="https://en.wikipedia.org/wiki/Constance_Swaniker">Constance Swaniker</a>. DTI and its industry partners train thousands of young Ghanaians in skilled trades and are doing the hard work of scaling up their programming nationwide.',
      },
      'As a SEED fellow, I had the privilege of working with DTI to ensure they had the data management and technical systems in place to speed up its incredible work around the country. That meant a combination of finding the right off-the-shelf software and deploying it around the country, and building custom tools for things like procurement, inventory, and student surveys.',
    ],
    tags: ['Questionnaire design', 'Data pipeline', 'Dashboards', 'Staff training'],
    orgHref: 'https://dtiafrica.com/',
    photos: [
      {
        src: '/gallery/design-technology-institute/precision-quality-talk-thumb.jpg',
        alt: 'Speaking at a Precision Quality session in Accra.',
      },
    ],
    href: '/projects/design-technology-institute/',
  },
  {
    years: '2023 — Now',
    role: 'Researcher · Survey Methods',
    org: 'Political Psychology Research Group',
    orgDetail: 'PI Jon Krosnick',
    place: 'Stanford, CA',
    description: [
      'The Political Psychology Research Group is a cross-disciplinary lab bringing together economics, psychology, and political science to study the psychological underpinnings of political behavior. Jon\'s group publishes heavily on the deceptively difficult practice of running and analyzing reliable surveys for social science.',
      'I led a small team to do a multi-year independent evaluation of sample matching, an emerging method of nonprobabilistic (non-random) survey sampling beginning to consume the industry. Across 17 years of data, we systematically examined one of the most cited datasets in political science, testing for changes in accuracy over time and deconstructing the error to reveal how good this kind of survey really is.',
    ],
    tags: ['R', 'Survey error', 'Weighting', 'Reproducibility', 'AAPOR'],
    orgHref: 'https://pprg.stanford.edu/',
    photos: [
      {
        src: '/gallery/political-psychology-research-group/jon-krosnick-thumb.jpg',
        alt: 'With Jon Krosnick at my Stanford thesis medal ceremony.',
      },
    ],
    href: '/projects/political-psychology-research-group/',
  },
  {
    years: '2024 — Now',
    role: 'Researcher · Cognitive Control',
    org: 'Poldrack Lab',
    orgDetail: 'PI Russell A. Poldrack',
    place: 'Stanford, CA',
    description: [
      'Russ\' lab studies the neural basis of adaptive behavior, and is a leader in open neuroscience. My corner of it was cognitive control: inhibitory control and cognitive flexibility, the machinery you use to stop yourself and to change course. It\'s the part of the mind that fails us in many of the behaviors we most want to change.',
      'I worked on a multimodal imaging study asking whether we could find the neural and behavioral markers that predict how people with putative deficits in cognitive control respond to an intervention meant to strengthen it. We ran it as a pre/post trial in people managing binge eating and nicotine dependence, pairing task-based fMRI with a mobile intervention. I designed our mediation analysis strategy to causally estimate the neural signals that actually carried the intervention\'s effect on behavior.',
    ],
    tags: ['fMRI', 'Python · SLURM', 'GLM', 'Preregistration'],
    orgHref: 'https://poldracklab.org/',
    photos: [
      {
        src: '/gallery/ontologies-of-cognitive-control/white-surface-thumb.jpg',
        alt: 'FreeSurfer reconstruction of a cortical white-matter surface.',
        objectPosition: 'center top',
      },
    ],
    href: '/projects/ontologies-of-cognitive-control/',
  },
  {
    years: '2022 — 23',
    role: 'Researcher · Special Projects',
    org: 'Ballmer Group',
    place: 'Seattle, WA',
    description: [
      'Steve Ballmer is the former CEO of Microsoft, and his foundation is a large philanthropic funder in the LA, Detroit, and Seattle metro areas. After I presented to Steve in a class, I worked with him and his philanthropy team to figure out what it would take to offer afterschool programming to every kid who wanted it across the three metros.',
      'I led a three-city study of the afterschool landscape in collaboration with local government and NGOs, and developed a cost model for afterschool education. The work culminated in a $450M annual budget that leaned on existing public infrastructure and a number of investments in youth extracurricular education.',
    ],
    tags: ['Program design', 'Budgeting', 'Field study', 'Policy'],
    orgHref: 'https://ballmergroup.org/',
    photos: [
      {
        src: '/gallery/ballmer/office-thumb.jpg',
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
      },
      {
        title:
          'Semi-Supervised MLP and GRU-Based Recurrent Variational Autoencoders for Antidepressant Response Prediction from EEG',
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
  caption?: string; // short label shown on the pinned corkboard card
};

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
    href: '/projects/euterria/',
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
    caption: 'dispatch app',
    title: 'A reader app for The Dispatch',
    summary:
      'A month-long fan project: an iOS reader for The Dispatch built entirely on their public RSS feed. Highlight any article to create an annotation, all saved in one place and shareable with the source link auto-appended. An AI feature I call “The Correspondent” recommends recent pieces to further or challenge a view, and can fact-check or add context as you read. Podcasts play inline in the background, plus dark mode, offline reading, and semantic search across full-article embeddings. I sent it to the founders on the off chance it was useful.',
    links: [{ label: 'Watch the walkthrough →', href: 'https://youtu.be/Qtjt9tDCQG8' }],
    video: 'Qtjt9tDCQG8',
  },
  {
    kind: 'Not software',
    status: 'Ongoing',
    caption: 'my cows',
    title: 'A herd of cattle',
    summary:
      'I own a small herd of cattle. It is, by a wide margin, the least digital thing I do — and probably the most grounding. A standing reminder that not every system worth tending runs on a computer.',
    links: [],
  },
  {
    kind: 'Proposal',
    status: 'Shelved',
    caption: 'nauru surveys',
    title: 'Survey infrastructure for Nauru',
    summary:
      'A proposal to stand up national survey infrastructure for Nauru, one of the smallest countries in the world. It never quite went anywhere, but I still like some of the thinking in it, so I am sharing the doc anyway.',
    links: [{ label: 'Read the proposal →' }],
  },
  {
    kind: 'College',
    status: '4× regional champs',
    caption: 'ethics bowl',
    title: 'Ethics Bowl',
    summary:
      'Competitive, collaborative philosophy: teams reason through moral dilemmas and are judged on the quality of their thinking rather than on beating the other side. Four years of it, four regional titles, and a national runner-up finish — some of the best arguing I have ever done.',
    links: [],
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
