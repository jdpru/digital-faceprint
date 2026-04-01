export const site = {
  name: 'JD Pruett',
  role: 'Engineer and researcher working on AI systems, measurement, and applied data infrastructure.',
  email: 'hello@example.com',
  github: 'https://github.com/jdpru',
  linkedin: 'https://www.linkedin.com/in/jdpruett/',
  twitter: 'https://x.com/',
};

export const projects = [
  {
    slug: 'ai-reliability-infrastructure',
    title: 'AI Reliability Infrastructure',
    period: 'Current work',
    summary:
      'Designing a reliability layer for enterprise AI systems that wraps standard LLM endpoints with prompt optimization, schema enforcement, evaluation, and post-training feedback loops.',
    details: [
      'Drop-in API design for production language model workflows',
      'Evaluation and regression monitoring across changing model/provider behavior',
      'Infrastructure that closes the loop between deployment data and training updates',
    ],
  },
  {
    slug: 'model-distillation-and-compression',
    title: 'Model Distillation and Compression',
    period: 'Applied ML systems',
    summary:
      'Building end-to-end pipelines for distilling large models into smaller, faster ones while preserving practical performance.',
    details: [
      'Forward-KL distillation, on-policy training, and structured pruning',
      'Benchmarking across reasoning and embedding tasks',
      'Deployment-focused tradeoff analysis across size, latency, and quality',
    ],
  },
  {
    slug: 'survey-accuracy-and-election-data',
    title: 'Survey Accuracy and Election Data',
    period: 'CES 2006–2022',
    summary:
      'Constructed a multi-year evaluation pipeline for the Cooperative Election Study to measure where nonprobability samples succeed and where weighting regimes break down.',
    details: [
      'Integrated external benchmarks from CPS, MIT Election Lab, FEC, and related sources',
      'Compared matching, post-stratification, and raking under shared evaluation metrics',
      'Modeled long-run error trends with an emphasis on measurement quality',
    ],
  },
  {
    slug: 'fmri-analysis-pipelines',
    title: 'fMRI Analysis Pipelines',
    period: 'Neuroimaging research',
    summary:
      'Designed BIDS-compliant workflows for pre/post intervention studies focused on cognitive control, decision-making, and behavioral change.',
    details: [
      'Built event timing systems and resolved alignment issues between behavioral and imaging logs',
      'Specified GLM analyses across stop-signal, delay discounting, and craving regulation tasks',
      'Created analysis pipelines intended to be measurable, reproducible, and extensible',
    ],
  },
];

export const publications = [
  {
    title: 'Accuracy in Matched Survey Samples (CES 2006–2022)',
    venue: 'Working paper',
    year: '2026',
    blurb:
      'Examines how nonprobability matched samples perform across weighting schemes, with a focus on long-term trends in error and the limits of post-stratification.',
  },
  {
    title: 'Additional papers and technical writing forthcoming',
    venue: 'In progress',
    year: '—',
    blurb:
      'This section can expand into papers, essays, talks, and technical notes once the final bibliography is ready.',
  },
];

export const writing = [
  'Essays about belief formation, changing norms, and how people navigate systems larger than themselves.',
  'Technical writing on AI systems, evaluation, model behavior, and measurement.',
  'Reflections on interfaces, product design, and making complex systems usable without hiding how they work.',
];

export const now = [
  'Building enterprise AI systems focused on reliability, evaluation, and inference performance.',
  'Thinking about distillation, pruning, and deployment loops that improve models over time.',
  'Writing and collecting notes for longer-form essays and research-adjacent pieces.',
];

export const personal = [
  'Outside of work, I am interested in writing, especially essays that sit somewhere between cultural observation and personal narrative.',
  'I keep circling back to questions about how people form beliefs, how norms move, and how individuals learn to navigate systems larger than themselves.',
  'I also spend a lot of time thinking about interfaces and product design: how to make technically complex systems usable without smoothing over the parts that actually matter.',
];
