---
name: Zen-Modern Wellness
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#434843'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#737872'
  outline-variant: '#c3c8c0'
  surface-tint: '#506352'
  primary: '#4d6150'
  on-primary: '#ffffff'
  primary-container: '#667a68'
  on-primary-container: '#f6fff4'
  inverse-primary: '#b7ccb7'
  secondary: '#675d4d'
  on-secondary: '#ffffff'
  secondary-container: '#f0e0cc'
  on-secondary-container: '#6e6353'
  tertiary: '#8c4a2f'
  on-tertiary: '#ffffff'
  tertiary-container: '#a96245'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e8d3'
  primary-fixed-dim: '#b7ccb7'
  on-primary-fixed: '#0e1f12'
  on-primary-fixed-variant: '#394b3b'
  secondary-fixed: '#f0e0cc'
  secondary-fixed-dim: '#d3c4b1'
  on-secondary-fixed: '#221a0e'
  on-secondary-fixed-variant: '#4f4537'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb599'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#71361c'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  h1:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Noto Serif
    fontSize: 36px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

This design system is built upon the concept of "Guided Serenity." It bridges the gap between ancient wellness traditions and high-performance modern living. The brand personality is rooted in professional expertise and tranquil refinement, targeting high-end clientele who seek balance through yoga, coaching, and training.

The visual style is a sophisticated blend of **Minimalism** and **Tactile Modernism**. It prioritizes breathability through expansive whitespace, ensuring the user never feels overwhelmed. Elements are layered with subtle depth to feel physical and grounded, mirroring the holistic nature of the services provided. The emotional response should be one of immediate decompression, clarity, and trust.

## Colors

The palette is derived from natural landscapes to evoke a sense of grounding.
- **Primary (Sage Green):** Used for key actions, brand presence, and success states. It represents growth and tranquility.
- **Secondary (Soft Sand):** The primary surface color for containers and secondary backgrounds. It provides warmth without the clinical feel of pure white.
- **Tertiary (Terracotta):** A sophisticated accent used sparingly for highlights, active states, or call-to-action elements that require gentle attention.
- **Neutral (Parchment):** The foundation of the layout. High-quality whitespace is rendered in this slightly off-white tone to reduce eye strain and feel more organic.

## Typography

This design system utilizes a high-contrast typographic pairing to signal both heritage and contemporary precision.

- **Headlines (Noto Serif):** Elegant and authoritative. The serif choice provides a "classic" and "grounded" feel, essential for establishing the coach's professional expertise.
- **Body & UI (Manrope):** A refined, modern sans-serif. Its geometric balance ensures high readability for training plans and long-form coaching content.
- **Labeling:** Small labels and overlines should use Manrope with increased letter spacing and uppercase styling to provide a clean, "editorial" look to the interface.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to maintain a premium, structured feel, transitioning to a fluid system for mobile devices. 

A 12-column grid is utilized with generous gutters (24px) to prevent content crowding. Vertical rhythm is established through a scale of 8px, but the system emphasizes "intentional emptiness." Sections should be separated by large vertical stacks (stack-lg) to allow the user's mind to rest while scrolling. Content should be centered or asymmetrically balanced to reflect a "Zen" aesthetic.

## Elevation & Depth

To maintain a serene and high-end aesthetic, this design system avoids heavy, dark shadows. Instead, it uses **Tonal Layers** and **Ambient Shadows**.

Depth is primarily achieved by placing Soft Sand (Secondary) surfaces on top of Parchment (Neutral) backgrounds. Where elevation is required (e.g., a floating booking card), use "Organic Glow" shadows: extremely diffused (20-40px blur), low-opacity (5-8%), and tinted with the Sage Green primary color to prevent a "dirty" gray appearance. This creates a soft, natural lift that feels like light passing through a translucent material.

## Shapes

The shape language is organic yet controlled. Standard UI elements use a **Rounded** (0.5rem) base to remove the "sharpness" of digital interfaces, making the experience feel more approachable and human.

Cards and large containers should utilize `rounded-xl` (1.5rem) to echo the soft curves found in nature, such as river stones or botanical leaves. Interactive elements like buttons should feel tactile and inviting.

## Components

**Buttons:**
- Primary: Solid Sage Green with white Manrope text. No icons unless necessary for clarity.
- Secondary: Outlined in Sage Green or Terracotta with a subtle Soft Sand fill on hover.
- High-end feel: Use slightly larger padding (16px 32px) to give actions "room to breathe."

**Cards:**
- Background: Secondary color (Soft Sand) with a very thin, low-opacity Sage Green border (1px).
- Content: Large margins (min 32px) inside the card to maintain the "Zen" aesthetic.

**Input Fields:**
- Minimalist bottom-border style or soft-filled containers. Focus states should transition the border color to Terracotta with a soft glow.

**Chips & Tags:**
- Used for session types (e.g., "Yoga," "Mindfulness"). These should be pill-shaped with Sage Green text on a very light Sage background.

**Specialized Components:**
- **Progress Medallions:** For personal training goals, use thin-stroke circular loaders to maintain a light, airy feel.
- **Image Frames:** Images should often feature generous internal margins (matting) or organic, non-uniform rounded corners to feel like framed art.