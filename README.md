# MARQUEE Heavy

Version 0.101 beta — 19 September 2026

A heavy display derivative of Michroma, developed for MARQUEE AI SYSTEMS using AI-assisted font engineering. The original Michroma authors remain credited. This is a working font build for review, not a claim that the underlying typeface was designed from scratch.

## Install and use

- **Desktop:** double-click `fonts/MARQUEE-Heavy.ttf` and use the operating system's font installer. Restart design apps if necessary. Depending on the application, select **MARQUEE Heavy / Regular** or **MARQUEE / Heavy**. Both names identify the same single heavy style. Do not apply artificial bold.
- **Web:** use `fonts/MARQUEE-Heavy.woff` with `webfont.css`.
- **Preview:** open `specimen.html`, which loads the included font locally, or view `SPECIMEN.png`.

The font has 498 glyphs and retains the source's 486 Unicode mappings. It includes uppercase, lowercase, numbers, punctuation and the source's accented characters. No language coverage beyond the source is promised.

## Design recipe

The build expands the original outlines with a centred 0.052em stroke, merges that stroke with the glyph fill, then applies a 99% vertical scale. Horizontal advances and original kerning/layout tables are retained. This converts the approved browser treatment into actual outlines rather than relying on CSS stroke or synthetic bold. The contours are unhinted; use this initial version for display sizes and headings.

The latest logo colour is #35434D. Colour is selected in your design software; it is not baked into a normal font. The approved Q underline is also logo artwork, not part of the ordinary Q glyph. Logo settings: underline width 62% of Q body; gap 8.7% of cap height below the body; thickness 25% of main vertical stroke. These are documented in `logo-settings.json`.

## Licence and attribution

SIL Open Font License 1.1. Include `OFL.txt` when sharing the font. Original licence is preserved at `sources/Michroma-OFL.txt`.

Suggested credit: “MARQUEE Heavy — derivative modifications by MARQUEE AI SYSTEMS, based on Michroma by the Michroma Project Authors.” This does not imply endorsement by the original designers. See `AUTHORS.txt`.

## Build

Install Node.js and the dependency pinned in package.json, then run:

```
npm install
npm run build
npm run specimen
```

`tools/build.cjs` rebuilds both fonts from the supplied original TTF. The original source binary and licence are supplied for reproducibility; `sources/outlines.json` contains the generated vector contours. It is an engineering source package, not a hand-edited Glyphs/UFO design master.

## Validation and current limitations

The TTF was parsed and checksum-validated independently with ReportLab, registered and rendered in Skia, and visually compared with the original plus the selected stroke/height treatment. WOFF table contents were checked against the TTF. See `VALIDATION.json`.

This is a **beta**. FontBakery, OpenType Sanitizer, Windows/Office/Adobe application tests, exhaustive language/mark-positioning review, and a full kerning/spacing review have not been completed. Original positioning tables were retained; combining marks and tight pairs merit review with the heavier outlines. No full font-family expansion, italic or variable axes are included.

See `PUBLISHING.md` for the recommended public release process. Nothing has been published online by this task.
