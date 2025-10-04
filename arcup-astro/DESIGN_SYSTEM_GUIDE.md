### arc^ Design System Guide

This guide documents the unified design system for the arc^ site. It covers tokens (CSS variables), utilities/classes, core components, and migration tips.

---

## 1. Design Tokens (in `src/styles/global.css`)

Use these variables instead of hard-coding values. They ensure consistency and easy theming.

### Colors
- `--color-bg`: Page background gradient base. Use on `<body>` and large backgrounds.
- `--color-bg-accent`: Dark accented background for overlays/panels when needed.
- `--color-surface`: Default panel background (frosted surface). Use for cards/sections.
- `--color-surface-strong`: Stronger surface variant when higher contrast is required.
- `--color-primary`: Arc^ brand teal (base). Use for borders, accents, emphasis.
- `--color-primary-soft`: Subtle teal tint. Use for soft backgrounds and hovers.
- `--color-primary-bright`: Bright accent teal. Use for links, active states, focus.
- `--color-text`: Primary foreground text.
- `--color-text-muted`: Secondary text, descriptions, captions.
- `--color-border`: Neutral border for panels, cards, tables.

Best practices:
- Prefer `--color-primary-bright` for interactive emphasis (links, icons) and `--color-primary` for structural accents (borders, dividers).
- Panels should use `--color-surface` with `--color-border` for delineation.

Consolidations from older CSS:
- Multiple rgba panel backgrounds consolidated into `--color-surface` and `--color-surface-strong`.
- Link/CTA blues/teals unified under `--color-primary` and `--color-primary-bright`.

### Typography
- `--font-sans`: Global font family (Inter + system fallbacks).
- `--font-weight-regular` (400), `--font-weight-medium` (500), `--font-weight-semibold` (600), `--font-weight-bold` (700).

Fluid type scale:
- `--text-xs`: Small captions.
- `--text-sm`: Secondary text.
- `--text-md`: Base body text.
- `--text-lg`: Lead/body-large.
- `--text-xl`: Sub-headers, pull quotes.
- `--text-2xl`: Section headings.
- `--text-3xl`: Large headings.
- `--text-4xl`: Hero H1.

### Spacing
- `--space-3xs` 0.125rem, `--space-2xs` 0.25rem, `--space-xs` 0.5rem
- `--space-s` 0.75rem, `--space-m` 1rem, `--space-l` 1.5rem
- `--space-xl` 2rem, `--space-2xl` 3rem, `--space-3xl` 4rem

Usage tips:
- Use `--space-*` for gaps, padding, and margins to keep rhythm consistent.

### Radius / Shadows / Motion / Layout
- `--radius-sm`, `--radius-md`, `--radius-lg`: Rounded corners for buttons/cards/containers.
- `--shadow-soft`, `--shadow-strong`: Depth for interactive/promo elements.
- `--transition-base`: Default ease for hover/focus transitions.
- `--shell-width`: Max content width for `.page-shell` and header/footer.

---

## 2. Utilities & Classes

Structure and global layout:
- `.page-shell`: Page content wrapper with responsive gap/padding. Use once per page.
- `.site-header`, `.site-footer`: Global chrome; already used by layout.

Typography primitives:
- `h1`/`h2`/`h3`/`h4`: Pre-sized heading styles aligned to the fluid scale.
- `.hero-eyebrow`: Small, uppercase/lowercase eyebrow style; use above hero headings.
- `.lead`: Larger paragraph for lede/intros.

Panels and grids:
- `.surface-panel`: Primary card/container surface with hover elevation.
- `.card-grid`, `.card-grid-2`, `.card-grid-3`: Responsive card grids.

Lists & links:
- `.styled-list`: Unordered list with arrow indicator and balanced rhythm.
- `.external-link`: Inline link with underline accent and subtle translate on hover.

Buttons:
- `.button`: Base button primitive (filled gradient brand style).
- Modifiers: `.button--outline`, `.button--muted`, `.button--link`.
  - Use `--outline` for secondary CTAs, `--muted` for low-emphasis actions, `--link` for in-flow links styled as actions.

Accessibility utilities:
- `.visually-hidden`: Hide content visually but keep it accessible to screen readers.
- `.skip-link`: Skip-to-content link; already included in layout.

Notes on naming:
- Prefer BEM-like modifiers on primitives (e.g., `button button--outline`).
- Avoid page-specific ad-hoc classes when primitives suffice.

---

## 3. Components

### `Button.astro`
Purpose: Standardize buttons with variants; can render as `<a>` or `<button>`.

Props:
- `variant`: "primary" | "outline" | "muted" | "link" (default: "primary")
- `href`: If provided, renders an anchor link; otherwise renders a button.
- `label`: Optional fallback text when no default slot is provided.
- `attrs`: Optional object spread onto the rendered element (e.g., `{ target: "_blank" }`).

Slots:
- Default slot for button content.

Example:
```astro
<Button href="/join">Primary CTA</Button>
<Button variant="outline">Secondary</Button>
<Button variant="muted">Tertiary</Button>
<Button variant="link" href="#learn-more">Learn more</Button>
```

### `Card.astro`
Purpose: Panel container using `.surface-panel`, with feature and numbered options.

Props:
- `feature` (boolean): Emphasized feature style.
- `numbered` (boolean): Displays a circular step badge.
- `number` (number): Step number for numbered cards.

Slots:
- Default slot for card content (headings, paragraphs, etc.).

Example:
```astro
<Card>
  <h3>Basic Card</h3>
  <p class="lead">Use for simple content panels.</p>
  <Button variant="outline">Read more</Button>
  </Card>
<Card numbered number={2}>
  <h3>Step Two</h3>
  <p>Describe the second step.</p>
</Card>
<Card feature>
  <h3>Feature</h3>
  <p>Highlight an important concept.</p>
</Card>
```

---

## 4. Migration Tips

Checklist:
1. Import tokens globally (already handled in `BaseLayout.astro`).
2. Replace ad-hoc backgrounds/borders with tokens:
   - Backgrounds → `--color-surface` or `--color-surface-strong`.
   - Borders → `--color-border` or `--color-primary` for emphasis.
3. Replace custom buttons with `button` primitives or `Button.astro`:
   - Old `.button-outline` → `button button--outline` or `<Button variant="outline"/>`.
   - Old muted/ghost variants → `button button--muted`.
4. Unify containers/panels:
   - Swap bespoke panels to `.surface-panel`.
   - Group cards using `.card-grid[-2|-3]` when relevant.
5. Typography:
   - Use `h1..h4` primitives and `.lead` for intro text.
   - For hero eyebrow, use `.hero-eyebrow`.
6. Lists:
   - Replace custom arrow lists with `.styled-list`.
7. Tables:
   - Use `--color-border` for separators and keep padding consistent (≈ `0.75rem`).

Breaking changes to watch for:
- If page CSS overrides old variable names or relies on previous one-off RGBA values, ensure they map to the new tokens listed above.
- Button markup may need class name updates to `button button--*` or swap to `<Button>` component.

Where to preview:
- Run dev server and visit `/style-guide` to see a visual reference for tokens, utilities, and components.


