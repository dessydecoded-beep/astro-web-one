type AccentTone = 'primary' | 'secondary' | 'accent';

interface PillarContent {
  accent: AccentTone;
  checks: string[];
  icon: string;
  text: string;
  title: string;
}

interface ServiceStat {
  label: string;
  value: string;
}

interface ServiceContent {
  eyebrow: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  stats?: ServiceStat[];
  tags?: string[];
  text: string;
  title: string;
  tone?: AccentTone;
}

export const images = {
  heroYoga:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBjKJ_QHUGMAQLnSv8s0adrQ2-T9CeWtdgTzktQPW6EUGbOsN7L9E2c0OgZpl5XOyNEoRjLSMeZ6CvG7ItOvq5UhMi9rX-BSfczqxnZCllmZ8Y284Lk7vL1JqkbNivJjUvWA06JlrhBE7wIKhqVDBSx7hxHLTQ5inl_j18pWFVvnw9ZLM9GU0C1VJX2esaGeUblXmATGXpR4jgVJZT6wio1dgzygKs5JqvgjwDnclqjHaLFZxnuI-uVO-I-BpRT_mDldERRj8PZhdEb',
  serviceYoga:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAyVU8qI1KXCTfrUtDfiZS5VRTfuCJCwiW-KFjsXmq0DtZV5acmOwdWMPPzikjfyF8F1BRk-z6P-GuDxszYfm4e_4SiD-H2khL3zDsoWpmK_6s4Lz3rtEko6E0K5Tg0iTaf2KB_MIvWJ6sZQaKkD4cGDGmC0FqWfJj93Cz6VpiuWIzqG149pQC19ivmRk-nFH9pnXFWkb01M98z9ijfZj8ksOJeUx1VgqH0zmsZtTiqbCkhQvZ6ADXGDNjI_IMYwfbDid1nIp0LU7ES',
  coaching:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAOqDJbXMP2azNL_JjgCc6EoFWGXVQVTAZolTQMuHsuKcV3BS8BpbM8xCo-Of00rYIsEG0d7Ew_xC4PU_jpaCTU6lMblY_1e5KsOmTUb8-Yfx7aTEIBNzOgrB05ABMO5C1eWghBEP6QrRCnSyIqKyRSL6r0r37_L-Vw808kR9_Da7-z2oNT3vcm_cwVJQKd-pnacpyOMJQOInbcaLNYAu5lWrWGI12rDmBxc9xx80T0pCTNSMfixs3tA_bDKLZtSCDv6mCbCOOfLUYs',
  training:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB279m5n41vUhXn68gRv8WobSBa89Rtqy_d5IhsVibCoa8rHK68AMl-cjAhejTJW3S_3-u9OF1pflZEWxvmcfkqQLiCjYzhSBFVC4uYwkYDNFIcrDPFqC0oTRG-O0X2zGukyQpoL_s3dzomXKCGG9dRdm7W0Kk_E4lJJqtYVDHAAkLZLpcU9N8TqJqjpxTErviMI7Mvgd96TFB1JTvVKnj8kq4_OV4vmUf_6WvmR1j7q0WxtdfhxmJMr9eE6Xzx7Jj5vvpEXd0HGpFp',
  coach:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCf7sqDaQa1aTV4HrWi0R2VZQ59AvJBCoX5Qfrq9ee23VUPmbaO1QsPiB27gWQ4ww4D7lT4rlN-SvXXRdJgCSLOdcz6__hxsRo0Hp6ZAJxOb7lhdvEhOoG6rr3A9WDcnkk3cAMzynIXV-Wm1RI8i8QwL2jR0PcbuTqWnDKgA1dc5DIpOEg8cLWRHzrheW6I8Ur9PKp9si8O9hd68r_aAy7iSKDdeILW4koP7xIv5Hz6-XRWbRbC-1_kcXUDf_29XcegiTfcipKqCz_G',
  stones:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBCbkDniZhm_sAPNECXmnHU3LaeoaCZBCtHE8mrtN5JtxyQwX0eICgMfgHpPoRScNqlKS2KF5E0T7N-cZ_MD891F91EfoZcOFXm2rdY8hxhLNsrjWFHzLB5bIxheXK1tUWUddyqWPU3Xuqm_XBBQtfUHSN06FCY3UW_MF1iWfQm9V7eaPVwUTxjG1G5MvvK_pQohbVLhBQ4iYj7YX7jEt_7TTOMowhJL6ULCQDqJYBMU5_Ar-J4MNU8s1Lfj6KAIn2gmWrdQ84VvcFw',
  studio:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCh5S9T3DCfr1VBzLzEMPkqf_18xrZGaHxUxz8WRHtSm6xQcq4L8Z29Heu5kPgwrmmd4bLCm45ONFSo2f9BBo9aUidmcvWuvEkKRl4Yyxt-qinHlSw2vmis5zfmDxhvbL3lfjbHUdir1nNK-tm_Ea6qmEEyjLbUlr2DzAWcmIUyQluxqbzyawtPoMxLUXL4uH6z9M5MCVtxLRTXv-aLwiVDVogM1ADG2Is6vkkaFRYJ8CK9aHLyl5F8nrT9cq1CUQ0w37R0kTGsOKuW',
};

export const homePageContent = {
  cta: {
    body: 'If you are ready for deeper self-trust, aligned action, and practical transformation, book a session with Dessy to begin.',
    buttonLabel: 'Book a Session',
    eyebrow: 'Your Next Chapter',
    title: 'Ready to create lasting change?',
  },
  feature: {
    eyebrow: 'Astrology Insight',
    image: images.serviceYoga,
    imageAlt: 'Reflective session with celestial charts and notebooks',
    tags: ['Birth Chart', 'Timing', 'Clarity'],
    text: 'Astrology sessions with Dessy translate your chart into grounded guidance, helping you understand your patterns, timing, relationships, and next aligned steps.',
    title: 'Astrology for Real Life',
  },
  hero: {
    body: 'NLP-informed life coaching, astrology, and transformational guidance to help you shift patterns, reconnect with your truth, and move forward with confidence.',
    imageAlt: 'Calm, reflective coaching environment',
    note: 'Insight becomes powerful when it turns into embodied action.',
    noteLabel: 'Transformational Work',
    primaryCtaLabel: 'Book a Session',
    secondaryCtaLabel: 'View Programs',
    title: 'Clarity, Alignment, and Meaningful Change.',
  },
  pillars: [
    {
      accent: 'primary',
      checks: ['Belief Repatterning', 'Behaviour Change'],
      icon: 'psychology',
      text: 'NLP coaching supports you in identifying unhelpful thought loops, shifting internal narratives, and building practical momentum toward the life you want.',
      title: 'NLP Life Coaching',
    },
    {
      accent: 'secondary',
      checks: ['Birth Chart Reading', 'Cycle Awareness'],
      icon: 'stars',
      text: 'Astrology brings language to your innate wiring, recurring themes, and life seasons so you can make decisions with more self-awareness and trust.',
      title: 'Astrology',
    },
    {
      accent: 'accent',
      checks: ['Intuition Building', 'Soul-Led Direction'],
      icon: 'auto_awesome',
      text: 'Dessy blends intuitive guidance with grounded coaching to support clients through transitions, purpose work, and identity expansion.',
      title: 'Transformational Guidance',
    },
  ] as PillarContent[],
  testimonials: {
    intro:
      'Clients work with Dessy when they are ready to stop circling the same patterns and start making clearer, more aligned choices.',
    items: [
      {
        name: 'Private Client',
        quote:
          'Working with Dessy helped me understand the stories I had been living inside. I left each session feeling clearer, calmer, and more honest with myself.',
        role: 'Life Coaching Client',
      },
      {
        name: 'Private Client',
        quote:
          'Her blend of astrology and coaching was exactly what I needed. It was insightful without being vague, and practical without losing depth.',
        role: 'Astrology Client',
      },
    ],
    title: 'Client Reflections',
  },
  threePillars: {
    body: 'Dessy\'s work brings together mindset, meaning, and intuitive insight so transformation is both deep and usable in everyday life.',
    title: 'How Dessy Works',
  },
};

export const servicesPageContent = {
  hero: {
    body: 'Support for the season you are in, whether you need clarity, healing, redirection, or a deeper understanding of yourself.',
    eyebrow: 'Work With Dessy',
    title: 'Coaching, Astrology, and Inner Transformation',
  },
  services: [
    {
      eyebrow: 'Mindset & Identity',
      image: images.serviceYoga,
      imageAlt: 'Focused one-on-one coaching session',
      tags: ['NLP Tools', 'Confidence', 'Direction'],
      text: 'Dessy\'s NLP life coaching helps you uncover limiting beliefs, shift internal patterns, and create more intentional responses in love, work, and life.',
      title: 'NLP Life Coaching',
    },
    {
      eyebrow: 'Cosmic Perspective',
      image: images.coaching,
      imageAlt: 'Astrology reading and chart exploration',
      reverse: true,
      stats: [
        { label: 'Session Style', value: '1:1' },
        { label: 'Focus', value: 'Insight' },
      ],
      text: 'Astrology sessions offer a grounded reading of your birth chart, current cycles, and key themes so you can navigate timing, relationships, and purpose with more awareness.',
      title: 'Astrology Sessions',
      tone: 'accent',
    },
    {
      eyebrow: 'Deep Integration',
      image: images.training,
      imageAlt: 'Reflective transformational coaching process',
      tags: ['Purpose', 'Transitions', 'Alignment'],
      text: 'For clients moving through reinvention, uncertainty, or spiritual growth, Dessy offers transformational guidance that bridges intuition with grounded next steps.',
      title: 'Transformational Mentoring',
      tone: 'secondary',
    },
  ] as ServiceContent[],
  signaturePath: {
    body: 'A tailored private journey that can combine NLP coaching, astrology, and intuitive support to meet you where you are and guide real change over time.',
    status: ['Private Support', 'By Application'],
    title: 'The Signature Journey',
  },
};

export const aboutPageContent = {
  credentials: ['NLP Qualified Life Coach', 'Astrologer', 'Transformational Guide', '1:1 Client Facilitator'],
  cta: {
    body: 'Whether you are looking for practical change, deeper self-understanding, or support through a turning point, Dessy is here to guide the process.',
    primaryCtaLabel: 'Book a Session',
    secondaryCtaLabel: 'Get in Touch',
    title: 'Ready to work with Dessy?',
  },
  expertise: {
    body: 'Dessy\'s work is grounded in coaching methodology, intuitive insight, and a commitment to helping clients create tangible shifts in their lives.',
    credentialLabel: 'Professional practice',
    title: 'Qualifications & Approach',
  },
  hero: {
    body: 'Dessy Rinika is an NLP-qualified life coach, astrologer, and transformational practitioner who helps people understand themselves more deeply and move through life with greater clarity.',
    detailLabel: 'Coaching & astrology practice',
    detailValue: '1:1 transformational work',
    eyebrow: 'About Dessy',
    imageAlt: 'Portrait representing Dessy Rinika',
    title: 'Insightful guidance for real life change.',
  },
  philosophy: {
    intro: 'Three values that shape the way Dessy supports personal transformation.',
    items: [
      {
        icon: 'visibility',
        quote: 'Awareness creates choice.',
        text: 'Before change can happen, patterns need to be seen clearly. Dessy helps clients notice the beliefs, cycles, and behaviours that shape their experience.',
        title: 'Honest Awareness',
      },
      {
        icon: 'change_circle',
        quote: 'Transformation should be lived, not just understood.',
        text: 'Insight matters most when it translates into practical shifts. Sessions are designed to move from reflection into action and integration.',
        title: 'Embodied Change',
      },
      {
        icon: 'stars',
        quote: 'Your path is personal.',
        text: 'There is no one-size-fits-all formula for growth. Dessy tailors each session to the person, their timing, and the deeper truth of what they are navigating.',
        title: 'Aligned Guidance',
      },
    ],
    title: 'The Foundation of Her Work',
  },
};

export const consultationPageContent = {
  benefits: [
    {
      icon: 'psychology',
      text: 'A blend of NLP coaching, astrology, and intuitive insight to support meaningful personal change.',
      title: 'Multi-Modal Support',
    },
    {
      icon: 'self_improvement',
      text: 'Sessions are tailored to your season of life, your goals, and the patterns you are ready to shift.',
      title: 'Personalised Approach',
    },
    {
      icon: 'verified',
      text: 'A grounded, supportive space to explore what is true, what is changing, and what comes next.',
      title: 'Safe, Honest Space',
    },
  ],
  hero: {
    body: 'Book a session with Dessy to explore the patterns, questions, and possibilities alive in your life right now.',
    imageAlt: 'Calm symbolic image representing reflection and clarity',
    title: 'Book a Session with Dessy',
  },
  sidebar: {
    cardEyebrow: 'Reach Out',
    imageAlt: 'Calm, welcoming online session space',
    imageLabel: 'Online Worldwide',
    title: 'Connect with Dessy',
  },
};
