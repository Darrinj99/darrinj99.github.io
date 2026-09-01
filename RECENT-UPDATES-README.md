# How to update the 3 "Recent Updates" cards

You do **not** need to edit `index.html` for normal homepage updates.

The cards are controlled by:

```text
/assets/js/recent-updates.js
```

The homepage always displays the **first three entries** in that file. Put the newest item at the top.

## Add a normal update

Open `assets/js/recent-updates.js` and copy this block above the older entries:

```js
{
  date: "September 2026",
  type: "Writeup",
  title: "Name of the new page",
  summary: "One or two sentences explaining what I added.",
  href: "/writeups/example.html",
  tone: "purple"
},
```

Save the file. The homepage will automatically show it as the newest card and push the previous third item off the homepage. Nothing is deleted; it is simply no longer one of the first three entries.

## Add an image to an update

Add an `image` line:

```js
{
  date: "September 2026",
  type: "Lab project",
  title: "New lab project",
  summary: "Short description.",
  href: "/lab/new-project.html",
  tone: "orange",
  image: "/images/my-screenshot.png"
},
```

The image is optional. Certification/news cards can stay text-only.

## Available card colors

Use one of these values for `tone`:

```text
purple
 yellow
 orange
 red
```

Use whatever makes sense visually; there is no technical meaning attached to the colors.

## Good things to put here

- a new technical writeup
- a new HTB/practice-box writeup
- a new CVE or vulnerability-research update
- a certification
- a finished homelab project
- a substantial update to an existing project

Keep each summary short. The point is to tell someone **what changed** and give them a direct link to it.
