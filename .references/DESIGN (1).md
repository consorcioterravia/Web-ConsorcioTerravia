---
name: Terravía Core
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#51443c'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#83746b'
  outline-variant: '#d5c3b8'
  surface-tint: '#805533'
  primary: '#6f4627'
  on-primary: '#ffffff'
  primary-container: '#8b5e3c'
  on-primary-container: '#ffe3d1'
  inverse-primary: '#f4bb92'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dddddd'
  on-secondary-container: '#606161'
  tertiary: '#505050'
  on-tertiary: '#ffffff'
  tertiary-container: '#696868'
  on-tertiary-container: '#eae7e7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc5'
  primary-fixed-dim: '#f4bb92'
  on-primary-fixed: '#301400'
  on-primary-fixed-variant: '#653d1e'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system is rooted in the concept of **Industrial Minimalism**, a visual language that bridges the raw permanence of architecture with the precision of modern PropTech. The identity targets high-net-worth investors and modern developers, demanding a UI that feels solid, exclusive, and technologically advanced.

The aesthetic balances the "Natural" (earthy bronze, organic textures) with the "Industrial" (structured grids, concrete grays, obsidian tones). We move away from the airy lightness of typical SaaS to embrace a more weighted, material-centric experience. Whitespace is used as a structural element—much like an open-floor architectural plan—to provide breathing room for high-impact photography and data-dense interfaces.

## Colors
The palette is a curated selection of architectural materials. 

- **Architectural Bronze (#8B5E3C):** Used exclusively for primary actions, success states, and key highlights. It represents the "human" and "natural" element within the machine.
- **Concrete Gray (#E5E5E5):** Serves as the primary surface color for containers and secondary backgrounds, providing a soft, matte industrial feel.
- **Obsidian & Anthracite:** These tones handle the typographic hierarchy. Obsidian (#1A1A1A) is reserved for headers and high-contrast UI elements to ensure a sense of "gravity" and authority.
- **Pure White (#FFFFFF):** Used for base layers to maintain a high-end, clean gallery feel.

## Typography
We utilize **Plus Jakarta Sans** for its geometric clarity and contemporary warmth. The typographic scale is designed to feel editorial and authoritative.

- **Headlines:** Use tight letter-spacing and bold weights to evoke the feeling of chiseled stone or architectural signage.
- **Labels:** Small caps or all-caps with increased tracking are preferred for technical data points and metadata to maintain a "blueprint" aesthetic.
- **Body:** Standardized at 16px for optimal legibility, utilizing a slightly generous line height to ensure clarity against gray backgrounds.

## Layout & Spacing
The layout follows a **Rigid Grid System** inspired by structural engineering. 

- **Desktop:** A 12-column fluid grid with wide 64px outer margins to create an "exclusive" frame for the content.
- **Rhythm:** We use a strict 8px base unit. Component padding should favor vertical breathing room (e.g., 24px top/bottom) to simulate the loftiness of high-end real estate.
- **Reflow:** On mobile devices, margins compress to 16px, and multi-column data cards stack into a single-column "slab" format.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layering** rather than traditional shadows. 

- **Slabs:** Elements should appear as if they are physical slabs of material. We use 1px solid borders in Anthracite (#333333) at low opacity (10-15%) to define boundaries.
- **Interactive States:** When an element is focused, we utilize a "Bronze Glow"—a very soft, low-blur shadow tinted with our primary color (#8B5E3C) to suggest a technical "activation" or backlighting.
- **Background Blurs:** Subtle backdrop filters (10px - 20px) are used on navigation bars to maintain the "Glass/Steel" industrial intersection.

## Shapes
We adopt a **Soft-Industrial** shape language. While the grid is rigid, the elements utilize a subtle `0.25rem` (4px) corner radius. This prevents the UI from feeling "sharp" or hostile, instead giving it the finished look of machined metal or polished concrete. 

Images and large layout containers may occasionally use 0px radius to emphasize a "monolithic" structural feel when they span the full width of the viewport.

## Components
- **Buttons:** Primary buttons are solid Architectural Bronze with Obsidian text for maximum contrast. Secondary buttons use a Concrete Gray fill with a thin Obsidian border. No gradients; keep them matte.
- **Input Fields:** Use a "Bottom-Border" only style for a minimalist, blueprint look, or a fully enclosed Soft Concrete Gray container with a 1px border.
- **Cards:** Cards should not have heavy shadows. Use a 1px border (#E5E5E5) and a slight change in background hue (White to Soft Gray) to denote hierarchy.
- **Chips/Badges:** Small, rectangular with the 4px radius. Use for "Status" (e.g., "Available", "Sold", "Under Construction") using high-contrast Anthracite backgrounds and white text.
- **Texture Accents:** Use a subtle "Micro-Grain" noise overlay on Concrete Gray surfaces to simulate material texture. For high-end property headers, a thin "Linear Grain" (dark wood texture) can be used as a divider or a decorative edge-line.
- **Progress Indicators:** Use thin, technical lines in Bronze to represent investment or construction milestones.