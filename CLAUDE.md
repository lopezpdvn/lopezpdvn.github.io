# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal website (pedroivanlopez.com, see `CNAME`), a Jekyll site hosted on GitHub Pages. GitHub Pages builds it on push to `master`. Nothing is built in CI, so any generated file the site needs must be committed.

## Commands

| Task | Command |
|---|---|
| Local serve | `bundle exec jekyll serve` |
| Full rebuild of generated files (clean, network profiles, résumé) | `npm run build` |
| Regenerate social/network profile includes only | `./scripts/make_network_profiles` (Python 3 + PyYAML) |
| Regenerate `resume.html` from `resume.json` | `npm run resume-export` (needs `resume-cli` and `jsonresume-theme-kendall`) |

There are no tests or linters.

Known build issues:
- The `Gemfile` pins Jekyll `~> 3.8.5`, but `_config.yml` uses `remote_theme` and `jekyll-remote-theme`, which are not in the `Gemfile`. A local `bundle exec jekyll` build may fail until you add that gem or switch to the `github-pages` gem.
- `npm run servelocal` calls `./bin/servelocal`, but `/bin` is gitignored and not in the repo.
- `npm run clean` deletes the committed `_includes/network_profiles/*` files. Always regenerate them afterwards.

## Architecture

- **Theme**: `remote_theme: pages-themes/midnight`. The local `_layouts/`, `_includes/` and `_sass/` + `css/main.scss` override it, so they effectively are the theme.
- **Layouts**: `default` (includes Disqus when `comments: true`), `page`, `post`, and `tech-note` (shows `first_published` / `last_updated` front matter and links back to `/tech-notes`).
- **URLs**: `permalink: "/:title"` globally, but nearly every page and post sets an explicit `permalink:` in its front matter. Keep existing permalinks stable, because `jekyll-redirect-from` is used for moved pages.
- **Content locations**:
  - `_posts/<year>/`: blog posts. `lang`/`categories` are `en` or `es`, and `pages/blog-en.md` / `pages/blog-es.md` filter on them.
  - `pages/`: standalone pages. `pages/tech-notes/` holds the tech-note pages (`layout: tech-note`). `pages/tmp.md` is a scratch page that gets edited often.
  - `_ustruct/`: a custom collection (`output: true`) with its own feed, `ustruct.xml`.
  - `_drafts/`: unpublished drafts.
  - `cerca/`, `mazerob/`, `printer73x/`: old project pages with pre-built Sphinx docs under `doc/`. `_config.yml` `include:` forces Jekyll to publish their underscore-prefixed dirs (`_static`, `_images`, `_modules`, `_sources`).
- **Network profiles pipeline**: `_data/network_profiles.yml` is the source of truth, and each profile is tagged with any of `frontpage`, `about`, `contact`, `connect`. `scripts/make_network_profiles` renders `_includes/network_profiles/{buttons,text}/{all,<tag>}.html`, which `pages/index.md`, `about.md`, `contact.md` and `connect.md` include. Button images are at `images/buttons/<id>.png`. To add or remove a profile, edit the YAML, rerun the script, and commit the generated HTML.
- **Résumé pipeline**: `resume.json` (JSON Resume format) → `resume-cli` with the kendall theme → `resume.html`. `scripts/make_resume` then prepends Jekyll front matter (`permalink: /resume/`). `resume_tn.json` is a variant used for the PDF (see the comment at the top of `make_resume`). The `.pdf`/`.doc`/`.docx` résumés are committed binaries.
- **Data files**: `_data/quotes.yml`, `tech-quotes.yml` and `faq.yml` feed the corresponding pages.

## Conventions

- Site-wide values (email, usernames, OpenPGP fingerprint, `short_intro`, and so on) live in `_config.yml`. Reference them as `site.*` instead of hard-coding them.
- Content is licensed CC-BY-NC-ND (`CC-BY-NC-ND.txt`, `pages/license.md`).
