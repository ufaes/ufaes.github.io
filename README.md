# AES Website
This is the static website for Audio Engineering Society at UF. It's built on the Tella template for the Hugo static site generator, but include some custom overrides for our needs.

## Maintaining
You don't need to build the site to update and maintain it.

The markdown for the about, team, events, and contact pages live in `index.md` inside their respective directories under /content/.

The **280x370** team headhots are kept under static/img/headhots. 
The sliding images for the homepage are kept under static/img/slide.

## Building
Requires:
* Hugo extended (v0.152+)
* Node.js (v18+)
* npm

When setting up for the first time, run `npm install` from the site root. On windows, you can set your Tailwind directory and run the site locally with:
```
set "HUGO_TAILWINDCSS=%CD%\node_modules\.bin\tailwindcss.cmd"
hugo server -D
```


