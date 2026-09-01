# Darrin Jackson Portfolio — Revamp v4

This version keeps the v3 layout, color palette, image use, and recent-updates system, but changes the non-technical writing to follow the voice and framing of the revised homepage.

The general rule for the writing in v4 is simple: describe what I actually do, what I am working on, and what I want to show without trying to make every part of the site sound like a polished personal brand. See `WRITING-VOICE-README.md` for the short reference used for this pass.

## Preview locally

From the project root:

```powershell
py -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Updating the homepage's 3 recent items

See:

```text
RECENT-UPDATES-README.md
```

The short version: edit only `assets/js/recent-updates.js`, put the newest entry first, and the homepage automatically displays the first three entries.

## Images

The current draft references technical screenshots from the existing live image library at:

```text
https://darrinj99.github.io/images/
```

When this version is eventually merged into the existing GitHub repository, keep the old `images/` directory. The remote image URLs can then be changed back to local `/images/...` paths if desired.

## Writeups / future CPTS content

The Writeups section is ready to grow. The current Kiloview CVE remains the main published vulnerability-research article, and the CPTS practice-box notes can be added as they are converted from raw notes into readable writeups.

## Important compatibility choice

`/writeups/kiloview_e3.html` is intentionally preserved because public advisory records reference that URL. Do not rename it without a permanent redirect.

Legacy project URLs remain in place so older links can continue to redirect to the redesigned sections.
