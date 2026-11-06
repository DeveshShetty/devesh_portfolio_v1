---
name: Devesh Shetty Portfolio
description: A matte graphite instrument panel where every headline number is a damped needle with its source.
colors:
  panel-night: "#0e1011"
  card-night: "#151819"
  secondary-night: "#1e2224"
  border-night: "#323739"
  field-night: "#6d787e"
  text-night: "#eaebe5"
  text-muted-night: "#a3aea8"
  radium-green-night: "#6eed98"
  panel-day: "#dcdfd8"
  card-day: "#ebede8"
  border-day: "#a5a99e"
  field-day: "#545e63"
  text-day: "#121517"
  text-muted-day: "#42494d"
  radium-green-day: "#0a5c33"
  caution-amber: "#ffb10a"
  caution-amber-ink: "#1d170c"
  focus-ring-night: "#ffb61a"
  focus-ring-day: "#b85c00"
  dial-face: "#0b0d0f"
  dial-tick: "#ecede8"
  steel-high: "#c9cdcf"
  steel-low: "#4d5356"
typography:
  display:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8.5vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.14em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.14em"
  readout:
    fontFamily: "B612 Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "2px"
  md: "2px"
  lg: "4px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "32px"
  section: "96px"
components:
  button-lamp:
    backgroundColor: "{colors.caution-amber}"
    textColor: "{colors.caution-amber-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text-night}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  panel:
    backgroundColor: "{colors.card-night}"
    textColor: "{colors.text-night}"
    rounded: "{rounded.lg}"
    padding: "32px"
  input-field:
    backgroundColor: "{colors.panel-night}"
    textColor: "{colors.text-night}"
    rounded: "{rounded.sm}"
    padding: "12px"
  tool-chip:
    textColor: "{colors.text-muted-night}"
    typography: "{typography.readout}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
---

# Design System: Devesh Shetty Portfolio

## Overview

**Creative North Star: "The Night-Flight Six-Pack"**

A matte black-graphite cockpit panel with fine grain and four corner screws. The page reads as instruments cross-checking one another: each headline result is a round gauge with a radium-green needle on a near-black face, a terse placard cap underneath, and an evidence line that names its source. Below the hero the page continues as a flight log, an avionics stack, approach plates and a comms panel, all in the same panel material.

The system is calm and dense rather than loud. Type is condensed and uppercase where it labels or announces (placards), and plain humanist sans where it explains. Green is the live-data voice, amber is the one lit action, everything else is graphite and off-white. A DAY/NIGHT dimmer in the top strip flips the panel to a pale daylight face with black markings; the instrument faces themselves stay dark in both modes, like real dials.

Confirmed rejections (from the direction contract): the headline-over-cards portfolio template, glowing neon "AI" styling, gradient text, eyebrow labels above headings, and section numbers.

**Key Characteristics:**
- Matte graphite panel, grain overlay on the whole page, hairline borders, 2-4px corners.
- Placard lettering: Barlow Condensed, uppercase, 0.14em tracking.
- Radium green for needles, live values and company/role accents; amber for lit actions.
- Instrument faces (face, tick, needle) are mode-independent and always dark.
- Motion is mechanical: an underdamped needle sweep and short ease-out reveals; reduced motion snaps to final state.

## Colors

A restrained graphite field with two signal hues, each with a single job. Values below are in the frontmatter (hex approximations of the HSL custom properties in `src/app/globals.css`; the CSS variables are the source of truth).

### Primary
- **Radium Green** (night `#6eed98`, day `#0a5c33`): Needles, live readouts, the role line in the hero, company names in the flight log, hover text on the email link. On the dial the needle is always the night green (`--needle`), even in DAY mode.

### Secondary
- **Caution Amber** (`#ffb10a`, ink `#1d170c`): The lit action. Email buttons (nav, hero, contact submit), status lamps, the active skills tab, text selection, input caret, the underline beneath the contact email. Same value in both modes.

### Neutral
- **Graphite Panel** (night `#0e1011`, day `#dcdfd8`): Page background.
- **Panel Face** (night `#151819`, day `#ebede8`): The `.panel` surface for the gauge cluster, about facts, project plates and the contact form.
- **Hairline** (night `#323739`, day `#a5a99e`): Borders and dividers; section tops are single hairlines.
- **Field Edge** (night `#6d787e`, day `#545e63`): Input borders only, so fields stay findable.
- **Off-White Text** (night `#eaebe5`, day `#121517`) and **Muted Text** (night `#a3aea8`, day `#42494d`).
- **Dial Face** (`#0b0d0f`), **Dial Tick** (`#ecede8`), **Steel** (high `#c9cdcf`, low `#4d5356`): Instrument-only; used for gauge faces, scales, bezels and screw heads in both modes.
- **Focus Ring** (night `#ffb61a`, day `#b85c00`): 2px outline with 3px offset on every focusable element.

### Named Rules
**The One Lit Action Rule.** Amber marks the thing the visitor should press or the single lamp that is on. It never fills decorative surfaces or large areas.
**The Dark Dial Rule.** Gauge face, ticks and needle do not follow the DAY/NIGHT switch. The panel around them changes; the instruments do not.
**The Green Is Data Rule.** Green means a measured value or the identity line, never a button fill.

## Typography

**Display Font:** Barlow Condensed (500, 600, 700; system-ui fallback)
**Body Font:** Barlow (400, 500, 700; system-ui fallback)
**Label/Mono Font:** B612 Mono (400, 700; ui-monospace fallback), an aviation cockpit face

**Character:** Condensed uppercase placards over a plain, readable sans, with a cockpit monospace for every number and tag. It reads as printed instrument lettering, not as editorial.

### Hierarchy
- **Display** (700, `clamp(3rem, 8.5vw, 6rem)`, 0.88, -0.02em, uppercase): The name in the hero only.
- **Headline** (700, `clamp(2.25rem, 4.5vw, 3.5rem)`, 0.95, tight tracking, uppercase, balanced wrap): Section headings (`.section-heading`).
- **Title** (600, 1.5-1.875rem, uppercase, 0.14em placard tracking): Role titles in the log, project plate titles, sheet titles.
- **Body** (Barlow 400, 1.125rem, 1.625; muted for secondary paragraphs, 62-72ch max): About and contact copy, log bullets.
- **Label** (600, 0.875-1.125rem, 0.14em, uppercase): Nav items, buttons, form labels, gauge captions, status line.
- **Readout** (B612 Mono, 0.75-0.875rem, tabular figures): Periods, tool chips, gauge numerals and values (19px bold inside the dial).

### Named Rules
**The Placard Rule.** Anything that labels, names or acts is Barlow Condensed uppercase at 0.14em. Anything that explains is Barlow sentence case.
**The Numbers Are Mono Rule.** Every figure, date range and tool tag is B612 Mono with tabular numerals.

## Layout

A centered container with horizontal padding of 16px, 32px (sm) and 48px (lg), and `scroll-padding-top` of 4.5rem under a 56px fixed nav strip. Sections are separated by a hairline top border and 96px vertical padding (`py-24`). The hero is a two-column grid (5fr text, 7fr gauge panel) at lg and above, filling the viewport height; below lg it stacks, with gauges in 2 columns on phones and 3 from sm. About is 6/6 columns; projects are a 6-column grid where the two flagship plates take 3 columns and the other three take 2; experience is a 13rem date column beside the body; contact is 6/6 with the form in a panel. Spacing rhythm is Tailwind's 4px scale with common steps at 8, 12, 24, 32 and 56px (`mt-14` before section content).

## Elevation & Depth

Depth is material, not atmospheric. The `.panel` surface has a 1px top inner highlight (`inset 0 1px 0 rgba(255,255,255,0.06)`) and a long, tight drop (`0 22px 36px -26px rgba(0,0,0,0.85)`); everything else is flat with hairlines. Gauge needles carry a small drop filter (`dx 1.5, dy 2, blur 1.6`). The primary hero button has a soft shadow (`0 8px 16px -8px rgba(0,0,0,0.7)`). A fixed grain layer (opacity 0.12 night, 0.16 day) sits over the page. Lamps are flat lenses with a radial gradient and a thin dark rim, never a glow or halo.

### Named Rules
**The Lens, Not Halo Rule.** Lamps and status dots are solid radial-gradient lenses. No outer glow.
**The Flat Between Panels Rule.** Only panels and the primary action carry a shadow; sections, rows and chips are flat.

## Shapes

Small, near-square corners: base radius 4px (`--radius`), 2px for buttons, chips, inputs and the dimmer. Round is reserved for instruments and lamps (gauge, bezel, lamp dot, skill tab indicator). Screws are four 8px radial-gradient heads inset 10px from each panel corner. Bullets in the log are 6px squares; the log rail carries a 6px amber square marker per entry.

## Components

### Buttons
- **Shape:** 2px corners (`rounded-sm`).
- **Lamp (primary):** amber fill, dark amber-ink label in placard caps, `12px 24px` padding at hero size, `36px` high in the nav. Hover lifts 2px.
- **Outline (secondary):** transparent with 40% off-white border; hover inverts to off-white fill with panel-colored text. Used for Resume and the project GitHub link.
- **Icon button:** 48px square with hairline border for LinkedIn and GitHub (hidden below sm); hover raises border and icon to full foreground.

### Navigation
A fixed 56px strip with a 95% panel background, backdrop blur and a hairline bottom edge. Left: "D. Shetty" in placard caps. Center: five placard links, the current section has a 2px amber underline 6px below. Right: the Night/Day dimmer (segmented, selected half is solid foreground with panel-colored text, 36px high) and the amber Email me button. Below md, a menu button opens a full-screen sheet with 30px placard links, an amber Email button and an outline Resume button.

### Gauge (signature)
A 220-unit SVG dial: steel gradient bezel (r108) that gets a 2.5px green ring when active, near-black face (r100), a 5px green operating band at r90, minor ticks (opacity 0.55) and major ticks over a -135 to 135 degree sweep, mono numerals with a face-colored halo, unit lettering in condensed caps (opacity 0.7) and a bold mono readout. Needle is a thin radium-green triangle driven by an underdamped spring (stiffness 34, damping 7.5, staggered 140ms per gauge). The placard caption below brightens when active. Six sit in a screwed panel; an evidence line underneath shows the active readout, its trend and a source link, and auto-cycles every 3.4s until the visitor hovers, focuses or clicks.

### Panels and plates
`.panel` with optional `.panel-screws`. Project plates are full-height buttons with condensed title, plus icon that rotates 90 degrees on hover, muted summary, a lamp-plus-kind placard line (amber lamp for flagships, green for the rest) and mono tool chips. Hover lifts the border to 60% foreground. Details open in a side sheet.

### Chips and tags
2px corners, hairline border, mono 12px muted text, `4px 10px` padding. Used for tools and skills in the log and sheets. The About fact labels are the same shape in placard caps on the panel background.

### Inputs / Fields
2px corners, Field Edge border, panel-colored fill, `12px` padding, placeholder in muted text. Focus: border goes full foreground and a 2px focus ring appears. Labels are placard caps above the field. Caret is amber.

### Skills tiles
Five tiles with a hairline border and a faint secondary fill; the active tile fills amber with ink text and its indicator dot inverts. Content is a two-column definition list under hairline dividers.

### Experience log
Ordered list divided by hairlines; at md a 13rem mono date and place column with a vertical hairline rail and a 6px amber square marker beside the body. Entries slide in from the left (18px, 0.55s, ease-out `[0.16,1,0.3,1]`).

### Known gaps (honest status)
- The gauge bezel is an SVG linear gradient (steel-high to steel-low), not a brushed-steel texture. It reads as polished rather than brushed.
- Skills tiles and the experience rail carry less of the instrument world than the hero: they are hairline tiles and a plain rail, without scales, lamps beyond a dot, or placard plates.
- The resume link in `src/lib/site.ts` is a deliberate placeholder (`https://drive.google.com/`) with a TODO.

## Do's and Don'ts

### Do:
- **Do** letter every label, button, nav item and gauge caption in Barlow Condensed uppercase with 0.14em tracking.
- **Do** set every number, date and tool tag in B612 Mono with tabular figures.
- **Do** build new surfaces from `.panel`, hairline borders and 2-4px corners; use `.panel-screws` on larger plates.
- **Do** show a source alongside any new headline figure, following the gauge evidence line.
- **Do** keep instrument faces, ticks and needles dark in both panel modes.
- **Do** honor `prefers-reduced-motion`: needles snap to value and transitions drop to 0.01ms.

### Don't:
- **Don't** use amber for decoration or large fills; it is the lit action and the single lamp.
- **Don't** use red; the destructive token exists but no surface uses it.
- **Don't** add glow, halo or neon treatments to green, lamps or text.
- **Don't** add eyebrow labels above headings, section numbers or gradient text.
- **Don't** invent a third accent hue or round the panel corners past 4px.
- **Don't** bring a headline-over-three-cards layout back into a section.
