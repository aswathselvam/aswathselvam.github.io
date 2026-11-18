# aswathselvam.github.io

Personal site built with [Academic Pages](https://github.com/academicpages/academicpages.github.io) (Jekyll),
edited in the browser with [Sveltia CMS](https://github.com/sveltia/sveltia-cms). Everything lives in this repo
and is served by GitHub Pages.

## Editing (no code)

1. Open **https://aswathselvam.github.io/admin/**
2. Click **Sign In Using Access Token** and paste a GitHub fine-grained token:
   GitHub → Settings → Developer settings → Fine-grained tokens → Generate new token
   - Repository access: *Only select repositories* → `aswathselvam.github.io`
   - Permissions: **Contents: Read and write** (Metadata: read-only is added automatically)
   - Set an expiry (e.g. 1 year)
3. Edit and click **Save**. Each save is a commit to `main`; the
   *Deploy site to GitHub Pages* action publishes it in ~1–2 minutes.

The token is stored only in your browser. Use **Sign Out** on shared computers.

| In the editor | File in the repo |
| --- | --- |
| Profile & Home → Profile | `site/_data/profile.yml` |
| Profile & Home → About me | `site/_pages/about.md` |
| Profile & Home → Activities | `site/_data/activities.yml` |
| Profile & Home → Companies & Teams | `site/_data/experience.yml` |
| Profile & Home → Selected Work gallery | `site/_data/gallery.yml` |
| Publications | `site/_publications/*.md` |
| Projects | `site/_portfolio/*.md` (`featured: true` shows it on the home page) |
| Blog Posts | `site/_posts/YYYY-MM-DD-title.md`, images in `site/images/blog/` |
| Uploaded images / videos | `site/images/projects/`, CV PDFs in `site/files/` |

Images uploaded in the editor are converted to WebP and scaled to at most 1600px
in your browser before they are committed (see `media_libraries` in `site/admin/config.yml`).
In a blog post, the image's **Title** becomes its caption; **Alt text** describes it for screen readers.

## Running locally

```bash
cd site
bundle install
npx uglify-js assets/js/plugins/jquery.greedy-navigation.js assets/js/_main.js assets/js/theme.js -c -m -o assets/js/main.min.js
bundle exec jekyll serve      # http://localhost:4000
```
With the local server running, `http://localhost:4000/admin/` → **Work with Local Repository**
(Chrome/Edge) edits the files on disk instead of committing to GitHub.

## Customizing the design

Layout and styles are code, not CMS content:
- `site/_sass/layout/_custom.scss` – cards, activities, companies, blog captions
- `site/_includes/item-card.html` – how a project/publication is rendered
- `site/_includes/home-sections.html` – home page sections (companies, publications, featured projects)

## Math and interactive graphs in posts

Each library loads only on pages that use it.

**Equations (MathJax)** – `$$ y = a \sin(bx) $$` inside a sentence is inline; on its own line it's a centered equation.

**3D / data plots (Plotly)** – a code block with language `plotly` containing the figure JSON
(e.g. from Python: `fig.to_json()`):

````
```plotly
{"data": [{"type": "surface", "z": [[0,1,2],[1,2,3],[2,3,4]]}], "layout": {"title": {"text": "My surface"}}}
```
````

**Slider-driven math (JSXGraph)** – a code block with language `jsxgraph`. The code gets a ready
`board` (x and y from -5 to 5); change the view with `board.setBoundingBox([xmin, ymax, xmax, ymin])`.
Docs and examples: https://jsxgraph.org/wp/docs/

````
```jsxgraph
const a = board.create('slider', [[-4, 4], [0, 4], [0, 1, 3]], { name: 'a' });
const b = board.create('slider', [[-4, 3.3], [0, 3.3], [0.1, 1, 4]], { name: 'b' });
board.create('functiongraph', [x => a.Value() * Math.sin(b.Value() * x)], { strokeWidth: 2 });
```
````
