import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const statSchema = z.object({
  label: z.string(),
  value: z.string(),
});

const serviceFeatureSchema = z.object({
  eyebrow: z.string(),
  image: z.string(),
  imageAlt: z.string(),
  reverse: z.boolean().optional(),
  stats: z.array(statSchema).optional(),
  tags: z.array(z.string()).optional(),
  text: z.string(),
  title: z.string(),
  tone: z.enum(['primary', 'secondary', 'accent']).optional(),
});

const home = defineCollection({
  loader: glob({ pattern: 'index.md', base: './src/content/home' }),
  schema: z.object({
    seoTitle: z.string(),
    seoDescription: z.string(),
    hero: z.object({
      eyebrow: z.string(),
      titleLead: z.string(),
      titleAccent: z.string(),
      text: z.string(),
      primaryCtaLabel: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaLabel: z.string(),
      secondaryCtaHref: z.string(),
      imageAlt: z.string(),
      cardLabel: z.string(),
      cardText: z.string(),
    }),
    pillarsHeading: z.string(),
    pillarsText: z.string(),
    pillars: z.array(
      z.object({
        accent: z.enum(['primary', 'secondary', 'accent']).optional(),
        checks: z.array(z.string()),
        icon: z.string(),
        text: z.string(),
        title: z.string(),
      }),
    ),
    feature: serviceFeatureSchema,
    testimonialsHeading: z.string(),
    testimonialsText: z.string(),
    testimonials: z.array(
      z.object({
        name: z.string(),
        role: z.string(),
        quote: z.string(),
      }),
    ),
    ctaHeading: z.string(),
    ctaText: z.string(),
    ctaLabel: z.string(),
    ctaHref: z.string(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: 'index.md', base: './src/content/services' }),
  schema: z.object({
    seoTitle: z.string(),
    seoDescription: z.string(),
    hero: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      text: z.string(),
    }),
    services: z.array(serviceFeatureSchema),
    signature: z.object({
      heading: z.string(),
      text: z.string(),
      meta: z.array(z.string()),
    }),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: 'index.md', base: './src/content/about' }),
  schema: z.object({
    seoTitle: z.string(),
    seoDescription: z.string(),
    hero: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      text: z.string(),
      experienceLabel: z.string(),
      experienceText: z.string(),
      imageAlt: z.string(),
    }),
    philosophyHeading: z.string(),
    philosophyText: z.string(),
    philosophy: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        text: z.string(),
        quote: z.string(),
      }),
    ),
    expertise: z.object({
      heading: z.string(),
      text: z.string(),
      credentials: z.array(z.string()),
    }),
    cta: z.object({
      heading: z.string(),
      text: z.string(),
      primaryLabel: z.string(),
      primaryHref: z.string(),
      secondaryLabel: z.string(),
      secondaryHref: z.string(),
    }),
  }),
});

const consultation = defineCollection({
  loader: glob({ pattern: 'index.md', base: './src/content/consultation' }),
  schema: z.object({
    seoTitle: z.string(),
    seoDescription: z.string(),
    hero: z.object({
      heading: z.string(),
      text: z.string(),
      imageAlt: z.string(),
    }),
    contact: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      details: z.array(
        z.object({
          icon: z.string(),
          label: z.string(),
          value: z.string(),
        }),
      ),
      studioImageAlt: z.string(),
      studioLabel: z.string(),
    }),
    formHeading: z.string(),
    formText: z.string(),
    inquiryTypes: z.array(z.string()),
    benefits: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        text: z.string(),
      }),
    ),
  }),
});

export const collections = { about, consultation, home, services };
